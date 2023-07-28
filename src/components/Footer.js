import {Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MailChimpForm } from './MailChimpForm';

export const Footer = () => {
    return (
      <footer className="footer">
        <Container className="align-items-center">
          <Row>
            <MailChimpForm />
          </Row>
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center txt-sm-end">
            <div className="social-icons">
              <a href="#">
                <img src={navIcon1} />
              </a>
              <a href="#">
                <img src={navIcon2} />
              </a>
              <a href="#">
                <img src={navIcon3} />
              </a>
            </div>
            <p>Copyright 2023. All right reserved.</p>
          </Col>
        </Container>
      </footer>
    );
}