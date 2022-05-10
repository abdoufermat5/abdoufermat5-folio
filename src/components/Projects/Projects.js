import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects from "../../Assets/Projects/projects.jpg";
import xaalys from "../../Assets/Projects/xaalys.png";
import teamxing from "../../Assets/Projects/teamxing.jpg";
import desaes from "../../Assets/Projects/DES-vs-AES.jpg";
import xoss from "../../Assets/Projects/xoss.png";
import microfrontend from "../../Assets/Projects/microfrontend.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xaalys}
              isBlog={false}
              title="Xaalys"
              description="Xaalys is a payment card, a RIB and an application for teenagers aged 12 to 17. All under the control of parents."
              link="https://play.google.com/store/apps/details?id=com.app.diana.xaalys_r&hl=en&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamxing}
              isBlog={false}
              title="Teamxing"
              description="A marketplace where vendors and sellers collaborate through the sale of new and used products in order to raise funds for social and non-profit groups. TeamXING Sports is now available on the Play Store where teams and coaches raise money through the sale of sports gear and equipment by their members and their social networks."
              link="https://play.google.com/store/apps/details?id=com.teamxing.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects}
              isBlog={false}
              title="Malaabe"
              description="It is a project that aims to fight against corruption for the withdrawal of administrative documents such as passports, birth certificates. We presented it at the UNODC hackathon (United Nations Office on Drugs and Crime) of 2021"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microfrontend}
              isBlog={false}
              title="Micro Front End"
              description="The goal of this project is to adopt a new strategy for the development of frontend web applications. Contrary to what is commonly done, that is to say a single project with a multitude of functionalities depending on each other, this new approach offers the possibility to separate the project into several parts and to develop these parts independently. The goal of module federation is to expose these sub-parts to a large entity that we call here container app (test-app). This way each part can be in a separate repository and be integrated in real time in the container app."
              link="https://github.com/abdoufermat5/mico-front-end"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xoss}
              isBlog={false}
              title="Xoss EPT"
              description="This app allows students to make purchases and pay at the end of the month or at a date to be determined by the shopkeeper. This is an application still under development"
              link="https://github.com/abdoufermat5/xoss_ept_mobile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desaes}
              isBlog={false}
              title="AES DES scratch implementation"
              description="In this project we have implemented the AES and DES cryptographic protocols from start to finish using the python programming language"
              link="https://github.com/abdoufermat5/cryptographie--aes_des/blob/main/AES_DES.ipynb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
