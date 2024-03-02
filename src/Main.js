import React, { useState, useEffect } from "react";
import "./Main.css";
import crochet from "./crochet.jpg";
import crochet1 from "./crochet1.jpg";
import crochet2 from "./crochet2.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  const [bakgrunnsbilde, setBakgrunnsbilde] = useState(
    getStil(window.innerWidth)
  );

  useEffect(() => {
    function handleResize() {
      setBakgrunnsbilde(getStil(window.innerWidth));
    }

    window.addEventListener(`resize`, handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  function getStil(width) {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${crochet})`,
      height: `100vh`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      ...(width < 900 ? { height: `60vh` } : {}),
    };
  }

  return (
    <div>
      <div style={bakgrunnsbilde}>
        <div className="header">
          <h1>
            Heklehistorier <br /> og garnkunst
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
          <div className="header-article-grid">
            <h2>Nyeste innlegg</h2>
            <p>Se tips, mønstre og inspirasjon for hekleentusiaster!</p>
            <Link to="/blogginnlegg" className="secondary-btn">
              Se alle blogginnlegg
            </Link>
          </div>
          <div className="article-section">
            <img src={crochet} alt="crochet" />
            <h3>10 må-ha hekletilbehør for nybegynnere</h3>
            <Link
              to="/blogginnlegg/10-ma-ha-hekletilbehor-for-nybegynnere"
              className="article-link"
            >
              Les innlegg
            </Link>
          </div>
          <div className="article-section">
            <img src={crochet1} alt="crochet" />
            <h3>Hekling 101 - En komplett guide</h3>
            <Link
              to="/blogginnlegg/hekling-101-en-komplett-guide"
              className="article-link"
            >
              Les innlegg
            </Link>
          </div>
          <div className="article-section">
            <img src={crochet2} alt="crochet" />
            <h3>Personlige og håndlagde hekleideer</h3>
            <Link
              to="/blogginnlegg/blogginnleggtittel"
              className="article-link"
            >
              Les innlegg
            </Link>
          </div>
          <div>
            <Link to="/blogginnlegg">
              <span>Se alle blogginnlegg</span>{" "}
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
