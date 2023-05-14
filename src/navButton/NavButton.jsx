import React from "react";
import Button from "react-bootstrap/Button";
import Home from "../home/Home.jsx";

const NavButton = ({ clicked, setClicked }) => {
  return (
    <>
      <style type="text/css">
        {`
  .btn-flat {
    background-color: white;
    color: white;
    border: white;
  }
  
  .btn-xxl {
    padding: 3rem .4rem 1rem .4rem;
  }
  `}
      </style>
      <div className="App">
        <Button
          className="homepage-btn"
          variant="flat"
          size="xxl"
          onClick={() => setClicked(!clicked)}
        >
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9AxhxlZhyxlUC9Uw6MEE97d642ROWXu28Hadm_5t&s"
          ></img>
        </Button>
        <Home clicked={clicked} setClicked={setClicked} />
      </div>
    </>
  );
};

export default NavButton;


// <Navbar bg="light" expand="lg">
// <Container fluid>
//   <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//   <Navbar.Toggle aria-controls="navbarScroll" />
//   <Navbar.Collapse id="navbarScroll">
//     <Nav
//       className="me-auto my-2 my-lg-0"
//       style={{ maxHeight: '100px' }}
//       navbarScroll
//     >
//       <Nav.Link href="#action1">Home</Nav.Link>
//       <Nav.Link href="#action2">Link</Nav.Link>
//       <NavDropdown title="Link" id="navbarScrollingDropdown">
//         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action4">
//           Another action
//         </NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action5">
//           Something else here
//         </NavDropdown.Item>
//       </NavDropdown>
//       <Nav.Link href="#" disabled>
//         Link
//       </Nav.Link>
//     </Nav>
//     <Form className="d-flex">
//       <Form.Control
//         type="search"
//         placeholder="Search"
//         className="me-2"
//         aria-label="Search"
//       />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Container>
// </Navbar>
