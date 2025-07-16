import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const toolList = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
    // Uncomment below if you want to include macOS too
    // { icon: <SiMacos />, name: "macOS" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolList.map((tool, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons text-center">
          <div>{tool.icon}</div>
          <div className="tool-name">{tool.name}</div> {/* <-- Custom class for styling */}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
