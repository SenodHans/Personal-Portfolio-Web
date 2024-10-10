import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// Make sure to import your CSS file

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <div className="purple-box"> {/* Add a div for the purple box */}
            <ProjectCard
  title={<span className="purple" style={{ fontSize: "2.5em" }}>"TV Shows" Mobile Application</span>}

  description={
    <>
      <strong>Overview:</strong>
      <p>
        TV Show mobile application integrates with various TV show APIs to provide users with up-to-date schedules, episode details, and upcoming shows.
      </p>
      <strong>User Experience:</strong>
      <p>
        The user-friendly design ensures easy navigation, offering a seamless platform for users to track and discover their favorite shows.
      </p>
      <strong>Technologies Used:</strong>
      <p>
        Java | React | Node.js | MongoDB | Adobe Photoshop | Android Studio
      </p>
    </>
  }
  ghLink="https://github.com/SenodHans/TV-Show-App/"
/>

            </div>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title={<span className="purple" style={{ fontSize: "2.5em" }}>"Shuttle Spot (2024)"</span>}
              description={
                <>
                  <strong>Overview:</strong>
                  <p>
                    Shuttle Spot (2024) is an online platform developed to solve real issues faced by a sports facility client. The project replaces a manual booking system with a modern solution that integrates additional sports and an equipment shop. It addresses problems like misplaced billing, paperwork overload, booking errors, and inefficient communication, improving management and user experience.
                  </p>
                  <strong>User Experience:</strong>
                  <p>
                    The user-friendly design ensures easy navigation and a seamless platform for users to book facilities and manage their activities efficiently.
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>
                    React | Node.js | Express.js | MongoDB | CSS3
                  </p>
                </>
              }
              
              
              ghLink="https://github.com/SenodHans"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={<span className="purple" style={{ fontSize: "2.5em" }}>"QuickCart"</span>}
              description={
                <>
                  <strong>Overview:</strong>
                  <p>
                    QuickCart is a fast and user-friendly e-commerce web application designed to provide a seamless shopping experience. It allows users to authenticate, browse, add products to their cart, and checkout quickly with an intuitive interface, making online shopping enjoyable.
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>
                    JavaScript | HTML | CSS | Node.js | Express.js | MongoDB
                  </p>
                </>
              }
              
              ghLink="https://github.com/soumyajit4419/Editor.io"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={<span className="purple" style={{ fontSize: "2.5em" }}>"LibraryPro"</span>}
              description={
                <>
                  <strong>Overview:</strong>
                  <p>
                    LibraryPro is a library management system that simplifies book borrowing, returns, and catalog management, offering a user-friendly interface for librarians and patrons alike. This ensures efficient data handling and seamless operations for libraries of all sizes.
                  </p>
                  <strong>Technologies Used:</strong>
                  <p>
                    Java | MySQL
                  </p>
                </>
              }
              
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
