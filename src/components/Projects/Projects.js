import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fakenews from "../../Assets/Projects/fakenews.png";
import digit from "../../Assets/Projects/digit.jpg";
import editor from "../../Assets/Projects/codeeditor.png";
import disk from "../../Assets/Projects/disk.jpg";
import compiler from "../../Assets/Projects/compiler.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> My Recent Works </strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disk}
              isBlog={false}
              title={<strong>Disk Simulator</strong>}
              description="Disk Scheduling Visualizer is a React-based tool to simulate and compare disk scheduling algorithms like FCFS, SSTF, SCAN, and LOOK. It visually represents disk head movements and request servicing order. The app helps users understand algorithm efficiency through interactive animations and stats."
              ghLink="https://github.com/yashika-45/PBL-OS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              isBlog={false}
              title={<strong>C Lite</strong>}
              description="C Lite is a web interface connected to a backend compiler engine built using Flex and Bison. It performs Lexical Analysis, Syntax Parsing with AST visualization, and Semantic Analysis with symbol table generation. This educational tool helps visualize each compilation phase for C programs in a simplified and interactive way."
              ghLink="https://github.com/yashika-45/PBL-CD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={<strong>Collab Code Editor</strong>}
              description="The Collab Code Editor is a real-time collaborative coding platform built using React, Socket.io, and Monoco code editor. It allows multiple users to write and edit code simultaneously in a shared environment. Users can select languages, see live changes, and collaborate effectively for interviews, pair programming, or learning."
              ghLink="https://github.com/yashika-45/real-time-collaborative-code-editor"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakenews}
              isBlog={false}
              title={<strong>Fake News Detection</strong>}
              description="A machine learning–powered Fake News Detection system built using Python and Flask. It analyzes news text to classify whether it's real or fake, leveraging natural language processing and trained ML models for accurate predictions."
              ghLink="https://github.com/yashika-45/Fake-News-Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title={<strong>Digit Recognition</strong>}
              description="It takes handwritten digit input and accurately predicts the number using a trained neural network model on the MNIST dataset."
              ghLink="https://github.com/yashika-45/Digit-Recognition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
