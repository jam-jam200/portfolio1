import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { navIcon1, navIcon2, reactLogo } from "../assets";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col>
            <img src={reactLogo} alt="logo" className="mt-4" />
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jessicaoyaks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/jessy_oyaks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="instagram" />
              </a>
            </div>
            <p>CopyRight &#169; 2022 Jessica Oyakhilome. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
