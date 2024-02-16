import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <a href="/">
          <li>Blogginnlegg</li>
        </a>
        <a href="/">
          <li>Bildegalleri</li>
        </a>
        <a href="/">
          <li>Kontakt</li>
        </a>
      </ul>
    </div>
  );
}
