import "../App.css";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavDropdown = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav className="nav flex-sm-column" variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <NavDropdown eventKey="1" title="Software Projects" id="nav-dropdown">
        <NavDropdown.Item eventKey="1.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="1.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          About me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
          Links
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4">
          Get in touch
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MyNavDropdown;
