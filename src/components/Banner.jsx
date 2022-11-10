import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { headerImg } from "../assets";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordToRotate = [
    " A Junior Frontend Developer",
    "And A Junior Software Tester",
  ];
  const [text, setText] = useState("");
  const [letter, setLetter] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let timer = setInterval(() => {
      time();
    }, letter);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  const time = () => {
    let n = loopNumber % wordToRotate.length;
    //* to keep track of the word being typed
    let fullText = wordToRotate[n];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setLetter((prevLetter) => prevLetter / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLetter(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setLetter(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline text-capitalize">
                    Welcome to my portfolio!
                  </span>
                  <h1>
                    {`Hello I'm Jessica `} <br />
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    My main objective is to use my technical knowledge
                    throughout the entire software life cycle to guarantee the
                    production and delivery of goods and services that adhere to
                    client requirements. I am confident that this goal can be
                    accomplished with the help of a capable software development
                    team and my strong personal knowledge, skills, and expertise
                    in front-end development. My work as a junior front-end
                    developer improved my skills in software development,
                    implementation, testing, and upgrading. One of my goals is
                    to keep up with the most recent IT trends and technology. If
                    given the chance, I am sure I can contribute something
                    valuable to the firm.
                  </p>
                  <button
                    className="text-capitalize"
                    onClick={() => console.log("connect")}
                  >
                    let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
