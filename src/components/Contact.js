import React from "react";
import "./Contact.css";
import Separator from "./Separator";
import SocialContact from "./SocialContact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-left-title">
            Si tu souhaite me contacter ✉️, tu peux cliquer sur les liens
            ci-dessous ou sur mon CV 😊.
          </p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../assets/AnthonyADELISE.pdf").default}>
              <i class='fi-rr-cloud-download download-icon' />
            Télégarder mon cv
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
