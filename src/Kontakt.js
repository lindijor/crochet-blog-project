import React, { useState } from "react";
import "./Kontakt.css";
import { Link } from "react-router-dom";

export default function Kontakt() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function alertSubmitted(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="afterSubmit">
        <p>Takk for din henvendelse! Du hører fra oss innen kort tid ✨</p>
        <Link to="/blogginnlegg" className="link">
          Hva med å lese noen blogginnlegg mens du venter?
        </Link>
      </div>
    );
  }

  return (
    <div className="kontakt">
      <h1>Kontakt</h1>
      <div className="kontakt-grid">
        <div className="kontakt-grid-text">
          <h2>
            Har du spørsmål eller ønsker mer informasjon? Ta gjerne kontakt!
          </h2>
          <ul>
            <li>
              <a href="mailto:hei@hekling.no">hei@hekling.no</a>
            </li>
            <li>
              <a href="tel:98765432">987 65 432</a>
            </li>
          </ul>
        </div>
        <div className="kontakt-grid-form">
          <form onSubmit={alertSubmitted}>
            <div>
              <input type="text" placeholder="Fornavn" className="first-name" />
              <input
                type="text"
                placeholder="Etternavn"
                className="last-name"
              />
            </div>
            <div>
              <input type="email" placeholder="E-post" className="email" />
              <input
                type="phone"
                placeholder="Telefonnummer"
                className="phone"
              />
            </div>
            <div>
              <textarea placeholder="Melding" class="message"></textarea>
            </div>
            <div>
              <button type="submit" className="btn">
                Send inn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
