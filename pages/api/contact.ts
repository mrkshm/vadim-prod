import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import mail from "@sendgrid/mail";
// @ts-ignore
mail.setApiKey(process.env.MAIL_API);

const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  // POST
  const { name, email, message } = req.body;

  const formulaireHtml = `<p>Vous avez reçu un message de nom : ${name}, email : ${email}.</p><p>Voici le mesage :</p><p>${message}</p>`;

  const formulaire = `Vous avez reçu un message de nom : ${name}, email : ${email}. Voici le message : ${message}`;

  mail
    .send({
      to: "mrks.heumann@gmail.com",
      from: "hey@mrks.me",
      subject: "Nouveau message du site",
      text: formulaire,
      html: formulaireHtml.replace(/\r\n/g, "<br>"),
    })
    .catch((error) => {
      return res.status(500).json({ message: "There was an error" });
    });

  return res.status(200).json({ message: "ok" });
}
