import React from "react";
import "./Main.css";
import crochet from "./crochet.jpg";

export default function Main() {
  const bakgrunnsbilde = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${crochet})`,
    height: `100vh`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
  };

  return (
    <div>
      <div style={bakgrunnsbilde}>
        <div className="header">
          <h1>
            Velkommen til <br /> heklebloggen
          </h1>
          <a href="/" className="btn">
            Se blogginnlegg
          </a>
        </div>
      </div>
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
            <h2>Nyeste artikler</h2>
            <p>Liten kort tekst om artiklene som ligger her</p>
            <a href="/" className="secondary-btn">
              Se alle artikler
            </a>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Artikkel tittel</h3>
            <a href="/" className="article-link">
              Les innlegg
            </a>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Artikkel tittel</h3>
            <a href="/" className="article-link">
              Les innlegg
            </a>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Artikkel tittel</h3>
            <a href="/" className="article-link">
              Les innlegg
            </a>
          </div>
          <div>
            <a href="/">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
