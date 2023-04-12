import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      {!show && (
        <Button className="text"
          variant="success"
          size="sm"
          onClick={() => setShow(true)}
        >
          Show Alert
        </Button>
      )}
      <Alert show={show} key="success" variant="success" bsPrefix="alert">
        <Alert.Heading>Thanks for stopping by!</Alert.Heading>
        <p>
          Check out some of my poems, recently <br />published in Issue 4 of {" "}
          <Alert.Link href="#">Cobra Milk</Alert.Link>.
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
