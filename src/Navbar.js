import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-icon">
        <a href="/">
          <i className="fa-solid fa-feather-pointed"></i>
        </a>
      </div>
      <div className="navbar-links">
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
    </div>
  );
}
