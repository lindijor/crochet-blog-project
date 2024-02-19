import React from "react";
import crochet from "./crochet.jpg";
import "./Blogginnlegg.css";
import { Link } from "react-router-dom";

export default function Blogginnlegg() {
  const blogginnleggListe = [
    {
      id: 1,
      tittel: "Tittel på blogginnlegget",
      url: "blogginnleggtittel",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
    },
    {
      id: 2,
      tittel: "Tittel på blogginnlegg to",
      url: "tittel-pa-blogginnlegg-to",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
    },
    {
      id: 3,
      tittel: "Tittel på blogginnlegg tre",
      url: "tittel-pa-blogginnlegg-tre",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
    },
    {
      id: 4,
      tittel: "Tittel på blogginnlegg 4",
      url: "tittel-pa-blogginnlegg-fire",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
    },
  ];

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
      <div>
        {blogginnleggListe.map((innlegg) => (
          <div className="blogginnlegg-grid">
            <div key={innlegg.id}>
              <img src={crochet} alt="crochet" />
            </div>
            <div className="bloggtekst">
              <h2>{innlegg.tittel}</h2>
              <p>{innlegg.intro}</p>
              <Link to={`/blogginnlegg/${innlegg.url}`} className="btn">
                Les blogginnlegget
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
