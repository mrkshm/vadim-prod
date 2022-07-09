import { useState } from "react";

interface CformProps {
  ctText: string;
}
function ContactForm({ ctText }: CformProps) {
  const successMessage = "Votre message à été envoyé.";
  const failMessage = "Il y avait un problème. Veuillez reessayer.";
  const entryError = "Nom et email ne peuvent pas être vide.";
  const [error, setError] = useState("");
  const [resMessage, setResMessage] = useState("");

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setResMessage("");
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!contactInfo.name || !contactInfo.email) {
      setResMessage(entryError);
      return;
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contactInfo.name,
        email: contactInfo.email,
        message: contactInfo.message,
      }),
    });
    if (!res.ok) {
      console.log("erroring");
      setResMessage(failMessage);
    } else {
      setResMessage(successMessage);
      setContactInfo({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div>
      <div className="ct-flexing">
        <div
          dangerouslySetInnerHTML={{
            __html: ctText,
          }}
          className="ct-instructions"
        ></div>
      </div>
      {resMessage ? <div className="result-message">{resMessage}</div> : null}
      <form className="contact-form" onSubmit={submitForm}>
        <label htmlFor="name">
          Votre nom
          <input
            type="text"
            name="name"
            placeholder="nom"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Votre email
          <input
            type="email"
            value={contactInfo.email}
            onChange={handleChange}
            name="email"
            placeholder="email@email.com"
          />
        </label>
        <label htmlFor="message">
          Votre message
          <textarea
            rows={8}
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
            placeholder="Bonjour Vadim, "
          />
        </label>
        <button className="submitButton" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
