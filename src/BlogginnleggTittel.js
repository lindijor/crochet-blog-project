import React from "react";
import "./BloginnleggTittel.css"
import crochet from "./crochet.jpg"

export default function BlogginnleggTittel() {
    return (
        <div>
            <h1>Blogginnlegg tittel</h1>
            <p>Dette er en ingress</p>
            <img src {crochet} alt="crochet" />
            <p>Brødtekst her</p>
            <a href="/" >En CTA</a>
        </div>
    )
}