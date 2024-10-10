import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiWindows, // Windows
  SiMacos,   // macOS
  SiGithub,  // GitHub
  SiDocker,  // Docker
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /> {/* Windows OS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /> {/* macOS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Slack */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* Docker */}
      </Col>
    </Row>
  );
}

export default Toolstack;
