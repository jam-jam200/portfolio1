import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { meter1, meter2, meter3, colorSharp } from "../assets";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                In order to create responsive designs, I employ a variety of
                frontend technologies and frameworks.
              </p>
              <Carousel
                className="skill-slider"
                responsive={responsive}
                infinite={true}
              >
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML5/CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Embedded Javascript EJS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="background" />
    </section>
  );
}

export default Skills;
