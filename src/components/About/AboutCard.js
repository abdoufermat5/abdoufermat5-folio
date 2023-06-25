import React from "react";
import Card from "react-bootstrap/Card";
import { BiFootball } from "react-icons/bi";
import { FaChess } from "react-icons/fa";
import { SiArtstation } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdou Yaya </span>
            from <span className="purple"> Tambacounda, Senegal.</span>
            <br />I am pursuing Computer Science at University of Versailles Saint-Quentin (<a className="ept-link" href="https://www.uvsq.fr/" target="_blank" rel="noreferrer">website</a>).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaChess /> Playing Chess
            </li>
            <li className="about-activity">
              <SiArtstation /> Watching Animes or Reading Mangas
            </li>
            <li className="about-activity">
              <BiFootball /> Watching Football games
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
