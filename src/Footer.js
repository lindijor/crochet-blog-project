import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact-info">
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>
              <a href="/">E-post</a>
            </li>
            <li>
              <a href="/">Telefon</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-links">
        <a href="/">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-pinterest-p"></i>
        </a>
      </div>
    </div>
  );
}
