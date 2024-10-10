import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Senod Weerathunga CV.pdf"; // Ensure this path is correct
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Text explaining the download option */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h5>You can download my<strong className="purple"> Resume</strong> in here.</h5>
          </div>

          {/* Button to download the CV */}
          <Button
            variant="primary"
            href={pdf}
            download // This will trigger the download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* Document rendering is removed as per your request */}
      </Container>
    </div>
  );
}

export default ResumeNew;
