import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Devstack";
import ProgrammingStack from "./Programmingstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about-me.svg";
import Toolstack from "./Toolstack";
import DevOpsStack from "./Devopstack";
import QueryStack from "./Querystack";

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Programming <strong className="purple">Skillset </strong>
          </h1>

          <ProgrammingStack />

          <h1 className="project-heading">
            Query & Data processing <strong className="purple">Skillset </strong>
          </h1>

          <QueryStack />

          <h1 className="project-heading">
            Tech <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Devops & Cloud <strong className="purple">Skillset </strong>
          </h1>

          <DevOpsStack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </section>
  );
}

export default About;
