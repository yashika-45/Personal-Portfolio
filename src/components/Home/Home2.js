import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from '../Footer';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="purple"> I DO? </span>
            </h1>
            <p className="home-about-body">
              I am a 21 year old B.Tech undergraduate with a keen interest in
              problem solving 🤷‍♂️
              <br />
              <br />I am fluent in programming languages like
              <i>
                <b className="purple"> C++, Java and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are
              <i>
                <b className="purple"> Full Stack Web Development </b> and
                also areas related to <b className="purple">Artificial Intelligence and Machine Learning.</b>
              </i>
              <br />
              <br />
              I want to apply my passion for developing products in real life scenarios
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/yashika-45"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yashika-goyal-759728293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* WhatsApp */}
              <li className="social-icons">
                <a
                  href="https://wa.me/919368212514" // format: wa.me/919XXXXXXXXX
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>

              {/* LeetCode */}
              <li className="social-icons">
                <a
                  href="https://leetcode.com/problemset/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Container>
    
  );
}
export default Home2;
