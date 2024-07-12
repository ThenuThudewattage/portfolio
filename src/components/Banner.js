import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web developer",
    "App developer",
    "Neuromorphic computing enthusiast",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 1000);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Thenu Thudewattage `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm Thenu Thudewattage, an undergraduate student in Computer
              Science and Engineering at the University of Moratuwa. With a
              strong foundation in mathematics and a keen interest in emerging
              technologies, I specialize in web and app development, as well as
              neuromorphic computing. My academic journey has equipped me with a
              diverse skill set, allowing me to tackle complex problems and
              develop innovative solutions. I am passionate about pushing the
              boundaries of technology and continuously learning to stay at the
              forefront of my field.
            </p>
            <button onClick={() => console.log("download")}>
              Download CV <Download size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
