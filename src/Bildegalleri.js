import React from "react";
import "./Gallery.css";
import crochet from "./crochet.jpg";
import crochet1 from "./crochet1.jpg";
import crochet3 from "./crochet3.jpg";
import { Link } from "react-router-dom";

export default function Bildegalleri() {
  return (
    <div className="gallery">
      <h1>Bildegalleri</h1>
      <p>Bli inspirert til ditt neste hekle-prosjekt!</p>
      <div className="gallery-grid">
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet1} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet3} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet1} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet3} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet3} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
        <div>
          <img src={crochet1} alt="crochet" />
          <p>Kort beskrivelse av bildet</p>
        </div>
      </div>
      <Link to="/blogginnlegg" className="btn">
        Se mer hekling i blogginnlegg
      </Link>
    </div>
  );
}
