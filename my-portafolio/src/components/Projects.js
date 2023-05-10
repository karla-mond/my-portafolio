import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/asleep.jpg';
import projImg2 from '../assets/img/aobregon.jpg';
import projImg3 from '../assets/img/swivel.jpg';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Asleep - 2022",
      description: "Videogame developed for the Mexican Association of Videogames, that lets the user build their own levels and scenarios. In a team of 3, we acted as full-stack and videogame developers. It was my first time working with agile methodologies and planning the software development.",
      imgUrl: projImg1,
    },
    {
      title: "Webpage and File System - 2023",
      description: "Webpage that allows the town hall administration of Álvaro Obregón to upload and monitor legal records and documents. Developed in a team of 4, we acted as full-stack developers, we were now more familiar with agile methodologies and we were presented with the use of cryptography for the protection of the user's data and for the database in accordance to the Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.",
      imgUrl: projImg2,
    },
    {
      title: "Swivel - 2023",
      description: "Web application with the purpose of the digitalization of the process of acquisition of a new or semi-new vehicle, where I had the opportunity to act as project manager while still being a part of the developing and testing team. Commercial grade software developed for NDS Cognitive labs.",
      imgUrl: projImg3,
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p> These are some of the works that have helped me grow as a person, student and employee. Some of this projects were developed alongside my friends at ITESM, others with my team at Santander México, and others by myself as passion projects.</p> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ITESM</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <p>Lorem Ipsum</p>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <p>Lorem Ipsum</p>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""/>
    </section>
  )
}