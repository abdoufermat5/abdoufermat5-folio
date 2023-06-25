import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrHadoop } from "react-icons/gr";
import { DiSpark } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";

function QueryStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GrHadoop />
        <p>Hadoop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark />
        <p>Spark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql />
        <p>SQL</p>
      </Col>
    </Row>
  );
}

export default QueryStack;
