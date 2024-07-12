import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export default function Skills() {
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
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I specialize in web and app development, as well as neuromorphic
                computing. My academic journey has equipped me with a diverse
                skill set, allowing me to tackle complex problems and develop
                innovative solutions.
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-sliderd"
                >
                  <div className="item">
                    <img src={""} alt="img" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="img" />
                    <h5>Node</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="img" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="img" />
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="img" />
                    <h5>Python</h5>
                  </div>
                </Carousel>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src ={colorSharp}/>
    </section>
  );
}
