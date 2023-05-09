import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      {!show && (
        <Button
          className="text"
          variant="success"
          size="sm"
          onClick={() => setShow(true)}
        >
          Show Alert
        </Button>
      )}
      <Alert show={show} key="success" variant="success" bsPrefix="alert">
        <p>
          Check out my article documenting my team's process to select and use a
          third-party API,{" "}
          <b>
            "
            <Alert.Link
              href="https://medium.com/@gracesanford/implementing-etsy-open-api-v3-in-a-web-application-66cd61b2c4cb"
              target="_blank"
              rel="noreferrer"
            >
              Implementing Etsy Open API v3 in a Web Application
            </Alert.Link>
            ,"
          </b>{" "}
          recently published on Medium.
        </p>
        <div>
          <Button variant="success" size="sm" onClick={() => setShow(false)}>
            Hide Alert
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default AlertDismissible;
