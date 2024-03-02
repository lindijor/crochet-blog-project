import React from "react";
import "./BlogginnleggTittel.css";
import crochet from "./crochet.jpg";
import { Link } from "react-router-dom";

export default function BlogginnleggTittel() {
  return (
    <div className="blogginnlegg-innhold">
      <img src={crochet} alt="crochet" />
      <p className="tag">Tips</p>
      <h1>10 må ha hekletilbehør for nybegynnere</h1>
      <p className="ingress">
        Hekling er en berikende og kreativ hobby som lar deg lage alt fra enkle
        grytekluter til komplekse gensere. For nybegynnere kan det imidlertid
        være overveldende å vite nøyaktig hva man trenger for å komme i gang.
        Her er en liste over 10 essensielle hekletilbehør som vil gjøre hekling
        til en lek for enhver nybegynner.
      </p>
      <h2>1. Heklenåler av god kvalitet</h2>
      <p className="brodtekst">
        En samling heklenåler i ulike størrelser er grunnsteinen i din
        heklekarriere. Ulike prosjekter krever ulike nålestørrelser, så et sett
        med varierte størrelser er ideelt.
      </p>
      <h2>2. Garn i ulike tykkelser</h2>
      <p className="brodtekst">
        Garn er selvsagt essensielt. Begynn med garn i medium tykkelse (gjerne
        kategorisert som vekt 4), da dette er enkelt å arbeide med. Etter hvert
        kan du eksperimentere med ulike tykkelser.
      </p>
      <h2>3. Saks</h2>
      <p className="brodtekst">
        En liten, skarp saks er uunnværlig for å klippe garnet. Invester i en
        saks som er dedikert til dine hekleprosjekter for å unngå sløvhet.
      </p>
      <h2>4. Målebånd</h2>
      <p className="brodtekst">
        Nøyaktighet er viktig i hekling. Et mykt målebånd lar deg måle arbeidet
        ditt underveis for å sikre at prosjektene dine blir som ønsket.
      </p>
      <h2>5. Maskemarkører</h2>
      <p className="brodtekst">
        Disse små hjelperne er uvurderlige for å markere viktige steder i
        arbeidet ditt, som starten på en omgang eller hvor økninger og
        reduksjoner skal skje.
      </p>
      <img src={crochet} alt="crochet" />
      <h2>6. Garnnål</h2>
      <p className="brodtekst">
        En garnnål, eller en ullnål, er tykkere enn en vanlig sy-nål og har et
        større øye. Den er perfekt for å feste trådender og sy sammen deler av
        ditt hekleprosjekt.
      </p>
      <h2>7. Ullblokker</h2>
      <p className="brodtekst">
        For å gi dine ferdige prosjekter en profesjonell finish, kan ullblokker
        være til stor hjelp. De lar deg strekke og forme arbeidet ditt for å
        oppnå den perfekte formen og størrelsen.
      </p>
      <h2>8. Heklebøer eller online ressurser</h2>
      <p className="brodtekst">
        Enten du foretrekker fysiske bøker eller online tutorials, er
        læringsressurser nødvendige for å utvide dine heklekunnskaper og
        ferdigheter.
      </p>
      <h2>9. Garnskål</h2>
      <p className="brodtekst">
        En garnskål holder nøstet på plass mens du hekler, og forhindrer det i å
        rulle bort og bli flokete. Dette enkle tilbehøret kan spare deg for mye
        frustrasjon.
      </p>
      <h2>10. Prosjektveske</h2>
      <p className="brodtekst">
        Til slutt er en god prosjektveske essensiell for å holde alle dine
        hekletilbehør og pågående prosjekter organisert og lett tilgjengelige,
        enten du er hjemme eller på farten.
      </p>
      <br />
      <p className="brodtekst">
        Med disse ti hekletilbehørene er du godt utrustet til å starte din
        hekleeventyr. Husk at tålmodighet og praksis er nøkkelen til å mestre
        denne kunsten. Lykke til med heklingen!
      </p>
      <Link to="/bildegalleri" className="btn">
        Bli inspirert i vårt bildegalleri
      </Link>
    </div>
  );
}
