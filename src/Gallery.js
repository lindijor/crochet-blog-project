import React from "react";
import "./Gallery.css";
import crochet from "./crochet.jpg";
import { Link } from "react-router-dom";

export default function Gallery() {
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
      </div>
      <Link to="/bildegalleri" className="btn">
        Se alle bilder
      </Link>
    </div>
  );
}
