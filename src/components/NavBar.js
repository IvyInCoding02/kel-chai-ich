import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


return (
  <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="/" className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("home")}> Home
          </Nav.Link>
          {/* <Nav.Link 
            href="/scholarships" className={activeLink === "scholarships" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("skills")}> Scholarships
          </Nav.Link> */}
          <NavDropdown title="Scholarships" id="basic-nav-dropdown" 
          className={activeLink === "scholarships" ? "active navbar-link" : "navbar-link"}
          onClick={() => onUpdateActiveLink("skills")}>
              <NavDropdown.Item href="/undergraduate">Undergraduate</NavDropdown.Item>
              <NavDropdown.Item href="/master's">
                Master's
              </NavDropdown.Item>
              <NavDropdown.Item href="phd">PhD</NavDropdown.Item>
              <NavDropdown.Item href="programmes">Programmes</NavDropdown.Item>
              <NavDropdown.Item href="scholarships">Scholarships</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Programmes
              </NavDropdown.Item> */}
            </NavDropdown>
          <Nav.Link 
            href="/resources" className={activeLink === "scholarships" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("skills")}> Resources
          </Nav.Link>
          <Nav.Link 
            href="/aboutUs" className={activeLink === "aboutUs" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("skills")}> AboutUs
          </Nav.Link>
          <Nav.Link
            href="/ouralumni" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("projects")}> Our Alumni
          </Nav.Link>
          <Nav.Link
            href="contacts" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("projects")}> Contact Us
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#">
              <img src={navIcon1} alt="" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="" />
            </a>
          </div>
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
          }
