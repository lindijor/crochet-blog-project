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
              <a href="mailto:hei@hekling.no">E-post</a>
            </li>
            <li>
              <a href="tel:98765432">Telefon</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-pinterest-p"></i>
        </a>
      </div>
    </div>
  );
}
