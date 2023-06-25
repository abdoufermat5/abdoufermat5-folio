import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiAndroid,
  DiDjango
} from "react-icons/di";
import {
  SiFlutter,
  SiVuedotjs,
  SiFlask,
  SiFastapi,
  SiExpress
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="stack-title">Frontend stack</div>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
        <p>VueJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>ReactJS</p>
      </Col>

      <div className="stack-title">Mobile stack</div>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <p>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p>Flutter</p>
      </Col>
      
      <div className="stack-title">Backend stack</div>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p>Django Rest</p>
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <p>FastAPI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p>ExpressJS</p>
      </Col>
  
    </Row>
  );
}

export default Techstack;
