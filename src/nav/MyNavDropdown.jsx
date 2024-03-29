import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import GalleryHouse from "../galleryHouse/GalleryHouse";
// import GitClothes from "../gitClothes/GitClothes";
import AboutMe from "../aboutMe/AboutMe";
import Links from "../links/Links";

import Container from "react-bootstrap/Container";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import Clutter from "../clutter/Clutter";
// import { Button } from "react-bootstrap";

const MyNavDropdown = ({clicked, setClicked}) => {
  const [active, setActive] = useState("default");
  return (
    <div>
      <div className="navContainer">
        <Navbar className="nav custom-navbar" expand="lg" bg="blue">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="nav"
                activeKey={active}
                onSelect={(selectedKey) => setActive(selectedKey)}
              >
                <NavDropdown className="nav-dropdown" title="Software Projects" id="nav-dropdown">
                  {/**Clutter */}
                  <NavDropdown.Item
                    eventKey="default"
                    title="CLUTTER"
                    as={NavHashLink}
                    className="style-navlink"
                    smooth
                    to="#clutter"
                    style={{ backgroundColor: 'transparent', color: 'black' }}
                  >
                    CLUTTER
                  </NavDropdown.Item>
                  {/**Gallery House */}
                  <NavDropdown.Item
                    eventKey="default"
                    title="Gallery House"
                    as={NavHashLink}
                    className="style-navlink"
                    smooth
                    to="#galleryhouse"
                    style={{ backgroundColor: 'transparent', color: 'black' }}
                  >
                    Gallery House
                  </NavDropdown.Item>

                  {/**Git-clothes */}
                  {/* <NavDropdown.Item
                    eventKey="1.2"
                    title="Git clothes"
                    as={NavHashLink}
                    className="style-navlink"
                    smooth
                    to="#gitclothes"
                    style={{ backgroundColor: 'transparent', color: 'black' }}
                  >
                    Git Clothes
                  </NavDropdown.Item> */}
                </NavDropdown>

                <Nav.Item>
                  {/**About */}
                  <Nav.Link
                    eventKey="2"
                    title="About me"
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
                  <Nav.Link
                    eventKey="3"
                    title="Get in touch"
                    id="nav-item"
                    activeClassName="active-link"
                    as={NavHashLink}
                    className="style-navlink"
                    smooth
                    to="#contact"
                  >
                    Get in touch
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <Button
          className="homepage-btn"
          variant="flat"
          size="xxl"
          onClick={() => setClicked(!clicked)}
        >
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9AxhxlZhyxlUC9Uw6MEE97d642ROWXu28Hadm_5t&s"
          ></img>
        </Button> */}
      <Clutter />
      <GalleryHouse />
      {/* <GitClothes /> */}
      <AboutMe />
      <Links />
    </div>
  );
};

export default MyNavDropdown;
