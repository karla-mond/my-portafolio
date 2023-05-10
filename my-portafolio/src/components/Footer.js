import { Container, Row, Col } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
// import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karla-mondrag%C3%B3n-rosas-15774721b" target="_blank" rel="noreferrer"><img src={navIcon1} alt=""/></a>
              {/* <a href=""><img src={navIcon2} alt=""/></a>
              <a href=""><img src={navIcon3} alt=""/></a> */}
            </div>
            <p>CopyRight 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}