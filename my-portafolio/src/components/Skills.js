import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skills</h2>
              <p> Throughout my academic and professional experience I've found my particular strengths: </p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <h5>Critical Thinking</h5>
                <h6> Generates innovative and valuable solutions to environmental problems </h6>
              </div>
              <div className="item">
                <h5>Leadership</h5>
                <h6> Respect diversity as an enriching element of personal and professional work, while developing software in the operating environment, evaluating compliance with the system requirements </h6>
              </div>
              <div className="item">
                <h5>Management</h5>
                <h6> Manage computational and information technology projects through the efficient use of resources </h6>
              </div>
              <div className="item">
                <h5>Programming</h5>
                <h6> Implements reliable and correct computational algorithms that solve problems </h6>
              </div>
            </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt=""/>
    </section>
  )
}