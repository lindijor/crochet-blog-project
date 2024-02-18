import React from "react";
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <div className="kontakt-grid">
      <div>
        <h1>Kontakt</h1>
        <h2>
          Har du spørsmål eller ønsker mer informasjon? Ta gjerne kontakt med
          meg
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
      <div>
        <form>
          <div>
            <input type="text" placeholder="Fornavn" className="first-name" />
            <input type="text" placeholder="Etternavn" className="last-name" />
          </div>
          <div>
            <input type="email" placeholder="E-post" className="email" />
            <input type="phone" placeholder="Telefonnummer" className="phone" />
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
  );
}