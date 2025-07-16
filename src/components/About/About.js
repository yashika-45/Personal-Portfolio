import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/image.png";
import Toolstack from "./Toolstack";

// Icons
import { FaTrophy, FaKeyboard, FaUserGraduate, FaFileAlt } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "flex-start", padding: "10px" }}>
          {/* Left Side: Text */}
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>

            <Aboutcard />

            {/* Achievements Section */}
            <div style={{ paddingTop: "30px" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple">Achievements</strong>
              </h1>
              <div style={{ color: "white", fontSize: "18px", lineHeight: "1.8" }}>
                <ul>
                  <li className="about-activity">
                    <FaTrophy style={{ marginRight: "10px" }} />
                    Runners-Up at JP Morgan Chase Code for Good Hackathon
                  </li>
                  <li className="about-activity">
                    <FaKeyboard style={{ marginRight: "10px" }} />
                    Solved more than 600+ coding problems
                  </li>
                  <li className="about-activity">
                    <FaUserGraduate style={{ marginRight: "10px" }} />
                    Shortlisted amongst top 50 women coders for Standard Chartered Diversity Hackathon
                  </li>
                  <li className="about-activity">
                    <FaFileAlt style={{ marginRight: "10px" }} />
                    Published a research paper entitled{" "}
                    <em>"Technology Manoeuvre to Avoid and Ascertain Terrorism"</em>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Right Side: Image aligned to top */}
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "30px", textAlign: "center" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxHeight: "350px", width: "100%", objectFit: "contain" }}
            />
          </Col>
        </Row>

        {/* Skillset */}
        <h1 className="project-heading">
          <strong className="purple">Professional Skillset</strong>
        </h1>
        <Techstack />

        {/* Tools */}
        <h1 className="project-heading">
          <strong className="purple">Tools I use</strong>
        </h1>
        <Toolstack />

        {/* GitHub Section */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
