import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Senod Weerathunga </span>
            from <span className="purple"> Galle, Sri Lanka.</span>
            <br />
            I’m currently pursuing my Bachelor of <span className="purple">Computer Science</span> from the University of Bedfordshire.
            <br />
            I am passionate about<span className="purple"> web development, full-stack development, and UI/UX design </span> and have completed both personal and course-related projects.
            <br />
            My work involves technologies like <span className="purple">React.js, Node.js, and Express.js </span> focusing on creating efficient and user-friendly applications.
            <br />
            <br />
            Outside of my professional interests, I am engaged in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Continuous learning in emerging technologies and development trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects and collaborating with developer communities
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring design principles to enhance user experience in digital products
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Senod</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
