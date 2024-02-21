import React from "react";
import crochet from "./crochet.jpg";
import crochet1 from "./crochet1.jpg";
import crochet2 from "./crochet2.jpg";
import crochet3 from "./crochet3.jpg";
import "./Blogginnlegg.css";
import { Link } from "react-router-dom";

export default function Blogginnlegg() {
  const blogginnleggListe = [
    {
      id: 1,
      tittel: "10 må-ha hekletilbehør for nybegynnere",
      url: "blogginnleggtittel",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
      bilde: crochet,
    },
    {
      id: 2,
      tittel: "Hekling 101 - En komplett guide",
      url: "blogginnleggtittel",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
      bilde: crochet1,
    },
    {
      id: 3,
      tittel: "Personlige og håndlagde hekleideer",
      url: "blogginnleggtittel",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
      bilde: crochet2,
    },
    {
      id: 4,
      tittel: "Hemmelighetene bak rask og effektiv hekling",
      url: "blogginnleggtittel",
      intro:
        "Kort introtekst om innleggene man kan finne og lese om her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel. Liten kort introtekst om innlegget som ligger her. Dette er et superfint blogginnlegg du burde lese! Ble du nysgjerrig nå? Les mer her da vel",
      bilde: crochet3,
    },
  ];

  return (
    <div className="blogginnlegg">
      <h1>Blogginnlegg</h1>
      <p className="blogg-intro">
        Enten du er en erfaren hekler eller akkurat har oppdaget gleden ved å
        skape med heklenål og garn, har du kommet til rett sted. Her finner du
        en skattkiste av inspirasjon, inkludert tips for garnvalg,
        trinn-for-trinn guider for unike prosjekter, og ideer for å gjøre dine
        heklede kreasjoner personlige og unike. La oss hekle sammen!
      </p>
      <div>
        {blogginnleggListe.map((innlegg) => (
          <div className="blogginnlegg-grid">
            <div key={innlegg.id}>
              <img src={innlegg.bilde} alt="crochet" />
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
