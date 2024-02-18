import React from "react";
import crochet from "./crochet.jpg";
import "./Blogginnlegg.css";

export default function Blogginnlegg() {
  return (
    <div className="blogginnlegg">
      <h1>Blogginnlegg</h1>
      <p className="blogg-intro">
        Kort introtekst om innleggene man kan finne og lese om her. Dette er et
        superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her
        da vel. Liten kort introtekst om innlegget som ligger her. Dette er et
        superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her
        da vel
      </p>
      <div className="blogginnlegg-grid">
        <div>
          <img src={crochet} alt="crochet" />
        </div>
        <div className="bloggtekst">
          <h2>Blogginnleggets tittel</h2>
          <p>
            Liten kort introtekst om innlegget som ligger her. Dette er et
            superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer
            her da vel. Liten kort introtekst om innlegget som ligger her. Dette
            er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå?
            Les mer her da vel
          </p>
          <a href="/" className="btn">
            Les blogginnlegget
          </a>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
        </div>
        <div className="bloggtekst">
          <h2>Blogginnleggets tittel</h2>
          <p>
            Liten kort introtekst om innlegget som ligger her. Dette er et
            superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer
            her da vel. Liten kort introtekst om innlegget som ligger her. Dette
            er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå?
            Les mer her da vel
          </p>
          <a href="/" className="btn">
            Les blogginnlegget
          </a>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
        </div>
        <div className="bloggtekst">
          <h2>Blogginnleggets tittel</h2>
          <p>
            Liten kort introtekst om innlegget som ligger her. Dette er et
            superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer
            her da vel. Liten kort introtekst om innlegget som ligger her. Dette
            er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå?
            Les mer her da vel
          </p>
          <a href="/" className="btn">
            Les blogginnlegget
          </a>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
        </div>
        <div className="bloggtekst">
          <h2>Blogginnleggets tittel</h2>
          <p>
            Liten kort introtekst om innlegget som ligger her. Dette er et
            superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer
            her da vel. Liten kort introtekst om innlegget som ligger her. Dette
            er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå?
            Les mer her da vel
          </p>
          <a href="/" className="btn">
            Les blogginnlegget
          </a>
        </div>
        <div>
          <img src={crochet} alt="crochet" />
        </div>
        <div className="bloggtekst">
          <h2>Blogginnleggets tittel</h2>
          <p>
            Liten kort introtekst om innlegget som ligger her. Dette er et
            superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer
            her da vel. Liten kort introtekst om innlegget som ligger her. Dette
            er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå?
            Les mer her da vel
          </p>
          <a href="/" className="btn">
            Les blogginnlegget
          </a>
        </div>
      </div>
    </div>
  );
}
