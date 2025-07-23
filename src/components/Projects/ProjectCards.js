import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi"; // Optional icon for live link

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-image-container">
        <img
          src={props.imgPath}
          alt="Project"
          className="project-image"
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button className="connect-btn mt-3" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {props.liveLink && (
          <Button
            className="connect-btn mt-3"
            href={props.liveLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BiLinkExternal /> &nbsp;
            View
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
