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
      url: "10-ma-ha-hekletilbehor-for-nybegynnere",
      intro:
        "Å dykke ned i heklingens verden kan være både spennende og litt overveldende. Med så mange verktøy og tilbehør tilgjengelig, kan det være utfordrende å vite hvor man skal begynne. Enten du er helt ny til hekling eller nettopp har bestemt deg for å ta hobbyen til et nytt nivå, er det visse tilbehør som kan gjøre reisen din både enklere og mer fornøyelig.",
      bilde: crochet,
      tags: ["tips"],
    },
    {
      id: 2,
      tittel: "Hekling 101 - En komplett guide",
      url: "blogginnleggtittel",
      intro:
        "Hekling er en kunstform som har gledet mennesker i generasjoner, en ferdighet som vever sammen kreativitet og håndverk for å skape alt fra praktiske hverdagsobjekter til intrikate kunstverk. Om du er helt fersk i heklingens verden eller en erfaren strikker som ser etter nye utfordringer, `Hekling 101 - En komplett guide` er her for å veilede deg gjennom hvert trinn på din hekle-reise.",
      bilde: crochet1,
      tags: ["tips"],
    },
    {
      id: 3,
      tittel: "Personlige og håndlagde hekleideer",
      url: "blogginnleggtittel",
      intro:
        "I en verden hvor det meste kan kjøpes med et enkelt klikk, står håndlagde gaver ut som symboler på omtanke og personlig dedikasjon. Hekling tilbyr en unik mulighet til å skape personlige gaver og dekorasjoner som bærer en del av skaperens hjerte og sjel.",
      bilde: crochet2,
      tags: ["oppskrifter"],
    },
    {
      id: 4,
      tittel: "Hemmelighetene bak rask og effektiv hekling",
      url: "blogginnleggtittel",
      intro:
        "I en travel hverdag kan tiden dedikert til hekling være en dyrebar flukt fra hverdagens stress, en stund av ro og kreativ utfoldelse. Men hva om du kunne gjøre denne tiden enda mer produktiv? Her avslører vi strategiene og teknikkene som kan hjelpe deg å hekle raskere, uten å ofre kvaliteten på arbeidet ditt.",
      bilde: crochet3,
      tags: ["øvrig"],
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
