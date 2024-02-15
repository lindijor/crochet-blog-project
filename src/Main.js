import React from "react";
import "./Main.css";
import crochet from "./crochet.jpg";

export default function Main() {
  return (
    <div>
      <div className="border">
        <p className="border-text">
          Lorem ipsum bla bla bla bla dette er en test tekst som skal erstattes
          av noe senere, så jeg bare har denne her så lenge sånn at jeg vet
          hvordan...
        </p>
      </div>
      <div>
        <div className="grid">
          <div>
            <h2>Artikler</h2>
            <p>Liten kort tekst om artiklene som ligger her</p>
            <a href="/" className="secondary-btn">
              Se artikler
            </a>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Artikkel tittel</h3>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Artikkel tittel</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
