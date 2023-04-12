import "../App.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const MyNavDropdown = () => {
  return (
    <Nav className="nav flex-column" variant="pills" activeKey="1">
      <NavDropdown title="Software Projects" id="nav-dropdown">
        <NavDropdown.Item eventKey="1.1">
          <LinkContainer to="/galleryhouse">
            <Nav.Link eventKey="1.1" title="Item">
              Gallery House
            </Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2">Git-clothes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="1.4">My GitHub</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        {/**About */}
        <LinkContainer to="/about">
          <Nav.Link eventKey="2" title="Item">
            About me
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>

      {/**Links */}
      <Nav.Item>
        <LinkContainer to="/links">
          <Nav.Link eventKey="3">Links</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="4">Get in touch</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavDropdown;
