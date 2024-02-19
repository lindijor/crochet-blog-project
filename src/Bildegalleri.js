import React from "react";
import "./Gallery.css";
import crochet from "./crochet.jpg";
import { Link } from "react-router-dom";

export default function Bildegalleri() {
  return (
    <div className="gallery">
      <h1>Bildegalleri</h1>
      <div className="gallery-grid">
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
      </div>
      <Link to="/blogginnlegg" className="btn">
        Se mer hekling i blogginnlegg
      </Link>
    </div>
  );
}
