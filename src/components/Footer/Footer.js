import {Container, Row, Col, Nav} from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";
import { FileX, Link } from 'react-bootstrap-icons';
import styles from "./footer.module.css";

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <Container className={styles.container}>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
              <Col size={12} sm={6}>
                <a href="/">Home</a>
                <a href="/scholarships"> Scholarships</a>
              </Col>
              {/* <Col size={12} sm={6}>
                <a>OurAlumni</a>
              </Col> */}
              <Col size={12} sm={6}>
                <a href="/aboutus">About Us </a>
                <a href="/contactus"> Contact Us </a>
                <a href=""> Partnership </a>
              </Col>
              <Col><a href="#"> Bishkek, Kyrgyzstan. 2023 </a></Col>
              <Col>
                <Nav.Link href="/login">Login</Nav.Link>
              </Col>
            </Col>
            <Col size={12} sm={6} className={styles.icons}>
              <div className="social-icon"> 
                <h1>Our social Media</h1>
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
