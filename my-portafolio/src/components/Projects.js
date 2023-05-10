import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/asleep.jpg';
import projImg2 from '../assets/img/aobregon.jpg';
import projImg3 from '../assets/img/swivel.jpg';
import projImg4 from '../assets/img/santander.jpg';
import projImg5 from '../assets/img/kalypso.jpg';
import projImg6 from '../assets/img/PH.jpg';
import projImg7 from '../assets/img/NHSMUN.jpg';
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
  const projectsWork = [
    {
      title: "Linker in MIS team - 9 months",
      description: "Intern in Management Information Systems at Santander México where as a team, we identified the Bank’s needs and the create KPIs that satisfy them. We managed and monitored more than 200 metrics that optimize the Bank’s technological resources and avoid risks and incidents. I was in charge of the creation and management of presentation materials for executives in senior management forums (regional and international) regarding the status of the indicators with their respective remediation plans if needed.",
      imgUrl: projImg4,
    },
    {
      title: "Winner of KIC and intern - starts in June",
      description: "Winner of the Kalypso Innovation Competition and future intern of the company",
      imgUrl: projImg5, 
    }
  ]
  const projectsPersonal = [
    {
      title: "Beautiful Patterns: Bootcamp for Young Women - Summer 2022",
      description: "Instructor of the basic level (english course in computational thinking and web design) for girls between the ages of 11 and 15 years. Planned and personalized teaching material for the girls, in collaboration with my teammates. Answered and tutored the students in their web design project (CSS, Java and HTML).",
      imgUrl: projImg6,
    },
    {
      title: "NHSMUN MX - 2022",
      description: "Director of SOCHUM  where I onceptualized topics that addressed world events and necessities while designing a plausible and interesting committee and collected, integrated and summarized information for the development of the committee and its topics.",
      imgUrl: projImg7, 
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
                          projectsWork.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsPersonal.map((project, index) => {
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