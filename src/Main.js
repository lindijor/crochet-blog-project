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
          Hekling er en kreativ håndarbeidsteknikk for å lage tekstiler ved å
          bruke en heklenål og garn. Denne teknikken gjør det mulig å skape alt
          fra klær til hjemmeinnredning, og er kjent for sin fleksibilitet og
          det brede spekteret av mønstre og design som kan oppnås.
        </p>
      </div>
      <div>
        <div className="grid">
          <div>
            <h2>Nyeste innlegg</h2>
            <p>Se tips, mønstre og inspirasjon for hekleentusiaster!</p>
            <Link to="/blogginnlegg" className="secondary-btn">
              Se alle blogginnlegg
            </Link>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>10 må-ha hekletilbehør for nybegynnere</h3>
            <a href="/" className="article-link">
              Les innlegg
            </a>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Hekling 101 - En komplett guide</h3>
            <a href="/" className="article-link">
              Les innlegg
            </a>
          </div>
          <div>
            <img src={crochet} alt="crochet" />
            <h3>Personlige og håndlagde hekleideer</h3>
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
