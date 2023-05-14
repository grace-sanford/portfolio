import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import GalleryHouse from "../galleryHouse/GalleryHouse";
import GitClothes from "../gitClothes/GitClothes";
import AboutMe from "../aboutMe/AboutMe";
import Links from "../links/Links"

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { NavHashLink } from "react-router-hash-link";

const MyNavDropdown = () => {
  return (
    <div className="App">
      <Navbar className="nav" expand="sm" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="nav" fill variant="pills" activeKey={null}>
              <NavDropdown title="Software Projects" id="nav-dropdown">
                {/**Gallery House */}
                <LinkContainer to="/galleryhouse">
                  <NavDropdown.Item
                    style={{ width: "5rem" }}
                    eventKey="1.1"
                    title="Item"
                    id="nav-dropdown-item"
                  >
                    Gallery House
                  </NavDropdown.Item>
                </LinkContainer>

                {/**Git-clothes */}
                <LinkContainer to="/gitclothes">
                  <NavDropdown.Item
                    eventKey="1.2"
                    title="Item"
                    id="nav-dropdown-item"
                  >
                    Git-clothes
                  </NavDropdown.Item>
                </LinkContainer>

                {/**My GitHub */}
                {/* <NavDropdown.Item
              eventKey="1.3"
              // onClick={() => alert(`Redirecting you to GitHub. Okay?`)}
              href="https://github.com/grace-sanford"
              target="_blank"
              id="nav-dropdown-item"
            >
              My GitHub
            </NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Item>
                {/**About */}
                <Nav.Link
                  eventKey="2"
                  title="Item"
                  id="nav-item"
                  activeClassName="active-link" // <-- define active classname
                  as={NavHashLink} // <-- render NavHashLink component
                  className="style-navlink"
                  smooth // <-- smooth scrolling
                  to="#about"
                >
                  About me
                </Nav.Link>
              </Nav.Item>

              {/**Contact me */}
              <Nav.Item>
                {/* <LinkContainer to="/links"> */}
                  <Nav.Link 
                  eventKey="3" 
                  id="nav-item"
                  activeClassName="active-link"
                  as={NavHashLink}
                  className="style-navlink"
                  smooth 
                  to="#contact">
                    Get in touch
                  </Nav.Link>
                {/* </LinkContainer> */}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <GalleryHouse />
      <GitClothes />
      <AboutMe />
      <Links />
    </div>
  );
};

export default MyNavDropdown;
