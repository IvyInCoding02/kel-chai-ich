import {Container, Row, Col, Nav} from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";
import { Link } from 'react-bootstrap-icons';
import styles from "./footer.module.css";

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
              <Col size={12} sm={6}>
                <a>Home|</a>
                <a>Scholarships|</a>
                <a>OurAlumni|</a>
              </Col>
              <Col size={12} sm={6}>
                <a>About Us|</a>
                <a>Contact Us|</a>
                <a>Partnership|</a>
              </Col>
              <Col>Bishkek, Kyrgyzstan. 2023</Col>
              <Col>
                <Nav.Link href="/login">Login</Nav.Link>
              </Col>
            </Col>
            <Col size={12} sm={6} className="text-center txt-sm-end">
              <div className="social-icon">
                <h1>Follow us on:</h1>
                <a href="https://www.linkedin.com/in/kel-chai-ich-foundation/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550845261660&mibextid=LQQJ4d">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://instagram.com/kel_chai_ich?igshid=MzMyNGUyNmU2YQ==">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </Col>
            <Col className="text-center txt-sm-center">
              <div className={styles.line}>
                <p className={styles.footerText}>Kel Chai Ich 2023. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}
