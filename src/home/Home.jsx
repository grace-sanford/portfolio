import "../App.css";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Nav from "../nav/Nav.jsx";
import AlertDismissible from "../alertDismissible/AlertDismissible";

function Home() {
  const [clicked, setClicked] = useState(false);

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
  padding: .4rem .4rem .4rem .4rem;
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
        {!clicked ? (
          <>
            <h2 className="homepage-header">
              <span className="ml-1">
                Hi, <br /></span>
                <span className="ml-2">
                I'm Grace, <br /></span>
                <span className="ml-3">
                Full Stack <br /></span>
                <span className="ml-4">
                Software Developer, <br /></span>
                <span className="ml-5">
                and Poet</span>
              
            </h2>
            <AlertDismissible className="alert"/>
          </>
        ) : (
          <Nav />
        )}
      </div>
    </>
  );
}

export default Home;
