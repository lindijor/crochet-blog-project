import React from "react";
import "./Main.css";
import crochet from "./crochet.jpg";
import { Link } from "react-router-dom";

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
            Hekling til <br /> hverdag og fest
          </h1>
          <Link to="/blogginnlegg" className="btn">
            Se blogginnlegg
          </Link>
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
            <Link to="/blogginnlegg" className="secondary-btn">
              Se alle artikler
            </Link>
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
            <Link to="/blogginnlegg">
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
