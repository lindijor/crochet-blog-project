import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-icon">
          <li>
            <Link to="/">
              <i className="fa-solid fa-feather-pointed"></i>
            </Link>
          </li>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/blogginnlegg">Blogginnlegg</Link>
            </li>
            <li>
              <Link to="/bildegalleri">Bildegalleri</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
