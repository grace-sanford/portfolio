import "../App.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const MyNavDropdown = () => {
  return (
    <div className="App">
      <Nav className="nav flex-column" fill variant="pills" activeKey={null}>
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
            <NavDropdown.Item eventKey="1.2" title="Item" id="nav-dropdown-item">
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
            id="nav-dropdown-item"
          >
            My GitHub
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Item>
          {/**About */}
          <LinkContainer to="/about">
            <Nav.Link eventKey="2" title="Item" id="nav-item">
              About me
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>

        {/**Links */}
        <Nav.Item>
          <LinkContainer to="/links">
            <Nav.Link eventKey="3" id="nav-item">Links</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        {/**Contact me */}
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link eventKey="4" id="nav-item">Get in touch</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MyNavDropdown;
