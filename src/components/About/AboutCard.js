import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <strong className="purple">Yashika Goyal </strong>
            a final year B.Tech student from <strong className="purple">Graphic Era Hill University, Dehradun </strong>
            <br />
            I am currently looking for full time roles where i can apply my technical knowledge to solve real world problems.

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
