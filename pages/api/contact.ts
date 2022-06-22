import type { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";
// @ts-ignore
mail.setApiKey(process.env.MAIL_API);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST
  const { name, email, message } = req.body;

  const formulaireHtml = `<p>Vous avez reçu un message de nom : ${name}, email : ${email}.</p><p>Voici le mesage :</p><p>${message}</p>`;

  const formulaire = `Vous avez reçu un message de nom : ${name}, email : ${email}. Voici le message : ${message}`;

  mail
    .send({
      to: "hey@mrks.me",
      from: "mrks.heumann@gmail.com",
      subject: "Nouveau message du site",
      text: formulaire,
      html: formulaireHtml.replace(/\r\n/g, "<br>"),
    })
    .catch((error) => {
      return res.status(500).json({ message: "There was an error" });
    });

  return res.status(200).json({ message: "ok" });
}
