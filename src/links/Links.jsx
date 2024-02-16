import "../App.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Container from "react-bootstrap/Container";

const Links = () => {
  return (
    <div className="sectionLinks" id="contact">
      <Container className="d-flex justify-content-center">
        <div className="text">
          {/* <h3>Get In Touch</h3> */}
          <p>
            Feel free to send me an email with job opportunties or interest in{" "}
            <span className="pink">collaboration</span>. Links below point
            to external resources. Projects and materials not found on this site
            can be found on <span className="lightblue">GitHub</span>.
          <p>
            {/* The links below point to external resources. Materials not linked
            here can be found on <span className="lightblue">GitHub</span>. */}
          </p>
          <ListGroup className="list-group col-md-5 mt-5">
            <ListGroup.Item
              action
              variant="info"
              href="mailto:gracesanford@protonmail.com"
              target="_blank"
            >
              <AiOutlineMail /> Email
            </ListGroup.Item>

            <ListGroup.Item
              action
              variant="dark"
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:5588c1e9-e2ba-4f01-8980-0e7985303a66"
              target="_blank"
            >
              <GrDocumentDownload /> Technical Resume
            </ListGroup.Item>

            <ListGroup.Item
              variant="primary"
              action
              href="https://www.linkedin.com/in/grace-m-sanford/"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </ListGroup.Item>

            <ListGroup.Item
              action
              variant="success"
              href="https://github.com/grace-sanford"
              target="_blank"
            >
              <AiFillGithub /> GitHub
            </ListGroup.Item>
          </ListGroup>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Links;
