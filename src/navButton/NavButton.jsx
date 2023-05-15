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
    padding: 0rem 0rem 0rem 0rem;
  }
  `}
      </style>
      <div className="App">
        <Home clicked={clicked} setClicked={setClicked} />
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
      </div>
    </>
  );
};

export default NavButton;
