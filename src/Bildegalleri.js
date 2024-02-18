import React from "react";
import "./Gallery.css";
import crochet from "./crochet.jpg";

export default function Bildegalleri() {
  return (
    <div className="gallery">
      <h2>Bildegalleri</h2>
      <div className="gallery-grid">
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
        <img src={crochet} alt="crochet" />
      </div>
      <a href="/" className="btn">
        Se mer i blogginnlegg
      </a>
    </div>
  );
}
