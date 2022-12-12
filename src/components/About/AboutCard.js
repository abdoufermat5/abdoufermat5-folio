import React from "react";
import Card from "react-bootstrap/Card";
import { BiFootball } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { SiWolframmathematica } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdou Yaya </span>
            from <span className="purple"> Tambacounda, Senegal.</span>
            <br />I am pursuing Computer Science at Paris Saclay University (<a className="ept-link" href="https://www.universite-paris-saclay.fr/" target="_blank" rel="noreferrer">website</a>).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <SiWolframmathematica /> Solving Maths problems
            </li>
            <li className="about-activity">
              <GiBrain /> Playing Scrabble game
            </li>
            <li className="about-activity">
              <BiFootball /> Watching Soccer
            </li>
          </ul>

          <p style={{ color: "rgba(122, 206, 178, 0.536)" }}>
            "Labor omnia vincit improbus"{" "}
          </p>
          <footer className="blockquote-footer">Virgil(70 BC - 19 BC)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
