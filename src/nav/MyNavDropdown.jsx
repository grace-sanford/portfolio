import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const MyNavDropdown = () => {
  return (
    <div className="App">
      <Navbar className="nav" expand="sm" bg="blue">
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
            <LinkContainer to="/about">
              <Nav.Link eventKey="2" title="Item" id="nav-item">
                About me
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>

          {/**Contact me */}
          <Nav.Item>
            <LinkContainer to="/links">
              <Nav.Link eventKey="3" id="nav-item">
                Get in touch
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavDropdown;
