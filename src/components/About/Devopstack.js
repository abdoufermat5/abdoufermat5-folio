import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJenkins
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { FaAws } from "react-icons/fa";

function DevOpsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BiGitBranch />
        <p>Git</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p>Jenkins</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p>AWS Cloud</p>
      </Col>
    </Row>
  );
}

export default DevOpsStack;
