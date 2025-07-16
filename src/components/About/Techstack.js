import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const techList = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techList.map((tech, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons text-center">
          <div>{tech.icon}</div>
          <div className="tech-name">{tech.name}</div> {/* <-- custom class */}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
