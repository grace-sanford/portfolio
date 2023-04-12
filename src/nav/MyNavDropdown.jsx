import "../App.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const MyNavDropdown = () => {

  return (
    <Nav className="nav flex-column" variant="pills" activeKey={null}>
      <NavDropdown title="Software Projects" id="nav-dropdown">
        {/**Gallery House */}
        <LinkContainer to="/galleryhouse">
          <NavDropdown.Item eventKey="1.1" title="Item">
            Gallery House
          </NavDropdown.Item>
        </LinkContainer>

        {/**Git-clothes */}
        <LinkContainer to="/gitclothes">
          <NavDropdown.Item eventKey="1.2" title="Item">
            Git-clothes
          </NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Divider />

        {/**My GitHub */}
        <NavDropdown.Item
          eventKey="1.3"
          // onClick={() => alert(`Redirecting you to GitHub. Okay?`)}
          href="https://github.com/grace-sanford"
          target="_blank"
        >
          My GitHub
        </NavDropdown.Item>
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

      {/**Contact me */}
      <Nav.Item>
        <LinkContainer to="/contact">
          <Nav.Link eventKey="4">Get in touch</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavDropdown;
