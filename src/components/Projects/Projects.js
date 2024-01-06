import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projects from "../../Assets/Projects/projects.jpg";
import deduplication from "../../Assets/Projects/deduplication.png";
import dataQuality from "../../Assets/Projects/dataQuality.png";
import cloud_perso from "../../Assets/Projects/cloud_perso.jpg";
import desaes from "../../Assets/Projects/DES-vs-AES.jpg";
import xoss from "../../Assets/Projects/xoss.png";
import veilify from "../../Assets/Projects/veilify.png";
import microfrontend from "../../Assets/Projects/microfrontend.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Side projects </strong>
        </h1>
        <h2 style={{ color: "white", marginTop: "3px" }}>
          Here are a few projects I've worked on recently.
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deduplication}
              isBlog={false}
              title="Deduplicate announcements"
              description="In this project, I began by loading and cleaning a dataset, and then proceeded to create graphical visualizations to better understand the data and identify criteria for grouping. I explored several heuristic grouping methods and discussed how a machine learning approach might yield improved results. Furthermore, I developed a Streamlit application to visualize the data along with its groupings, effectively simulating a deduplication platform that aggregates similar announcements."
              link="https://github.com/abdoufermat5/deduplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataQuality}
              isBlog={false}
              title="Evaluation of data quality and mapping"
              description="In this project we have implemented a set of Talend jobs to evaluate the quality of the data through some quality factors (conformity, completeness, heterogeneity, duplicates) and to compute a target schema (mapping) from the computational expressions (join, union, projection...)."
              link="https://drive.google.com/file/d/1rQXaZTcmAdrxKxp0BB9JVjIsvtyO8Srb/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud_perso}
              isBlog={false}
              title="Calculs statistiques 'privacy-by-design' pour le Cloud Personnel"
              description="Study of a dataset of 17,621 trajectories with a total distance of about 1.2 million kilometers and a total duration of more than 48,000 hours collected over 5 years. The objective is to determine the home-work journeys and the most commonly used means of transport to make this journey from the GPS data."
              link="https://abdoufermat5-gps-statistiques-accueil-eoxkcm.streamlit.app/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veilify}
              isBlog={false}
              title="Veilify"
              description="Welcome to Veilify - the app that lets you black out parts of your images with ease! Just drop an image and let us do the magic."
              link="https://veilify.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects}
              isBlog={false}
              title="Malaabe"
              description="It is a project that aims to fight against corruption for the withdrawal of administrative documents such as passports, birth certificates. We presented it at the UNODC hackathon (United Nations Office on Drugs and Crime) of 2021"
              link="https://github.com/malabe-org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microfrontend}
              isBlog={false}
              title="Micro Front End"
              description="The goal of this project is to adopt a new strategy for the development of frontend web applications. "
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
