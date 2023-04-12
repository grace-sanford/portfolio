import "../App.css";
import Button from "react-bootstrap/Button";
import React from "react";
import AlertDismissible from "../alertDismissible/AlertDismissible";
import MyNavDropdown from "../nav/MyNavDropdown";

function Home({clicked, setClicked}) {

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
        {!clicked ? (
          <>
            <h2 className="homepage-header">
              <span className="hi">
                Hi, <br />
              </span>
              <span className="ml-1">
                I'm Grace, <br />
              </span>
              <span className="ml-2">
                Full Stack <br />
              </span>
              <span className="ml-3">
                Software <br />
              </span>
              <span className="ml-4">
                Developer, <br />
              </span>
              <span className="ml-2k">and Poet</span>
            </h2>
            <AlertDismissible className="alert" />
          </>
        ) : (
          <MyNavDropdown />
        )}
      </div>
    </>
  );
}

export default Home;
