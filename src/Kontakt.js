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
            <div className="form-row">
              <div className="form-labels">
                <label for="fornavn">Fornavn</label>
                <input
                  type="text"
                  id="fornavn"
                  required
                  placeholder="Kari"
                  className="first-name"
                />
              </div>
              <div className="form-labels">
                <label for="etternavn">Etternavn</label>
                <input
                  type="text"
                  id="etternavn"
                  required
                  placeholder="Nordmann"
                  className="last-name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-labels">
                <label for="email">E-post</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="hei@hekling.no"
                  className="email"
                />
              </div>
              <div className="form-labels">
                <label for="telephone">Telefonnummer</label>
                <input
                  type="tel"
                  id="telephone"
                  required
                  placeholder="987 65 432"
                  className="phone"
                />
              </div>
            </div>
            <div className="form-labels">
              <label for="message">Melding</label>
              <textarea
                placeholder="Skriv din melding her"
                id="message"
                class="message"
              ></textarea>
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
