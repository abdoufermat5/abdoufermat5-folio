import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer sticky-bottom">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Abdou Yaya SADIAKHOU</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Abdoufermat-5</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons footer-social-icons">
              <a
                href="https://github.com/abdoufermat5"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons footer-social-icons">
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/abdou-yaya-sadiakhou-40a94b1a3/"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
