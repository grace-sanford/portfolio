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
      <Container>
        <hr />
        <div className="text">
        <h3>Get In Touch</h3>
          <p>
            Feel free to send me an <span className="pink">email</span> with job
            opportunties or interest in collaboration.
          </p>
          <p>
            The links below point to external resources. Materials not linked
            here can be found on <span className="lightblue">GitHub</span>.
          </p>
          <ListGroup>
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
              variant="dark"
              href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:82dbf55f-be0b-33c1-b9fa-cb93b1c625e0"
              target="_blank"
            >
              <GrDocumentDownload />
              Technical Resume
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="success"
              href="https://github.com/grace-sanford"
              target="_blank"
            >
              <AiFillGithub />
              GitHub
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="info"
              href="mailto:gracesanford@protonmail.com"
              target="_blank"
            >
              <AiOutlineMail />
              Email
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </div>
  );
};

export default Links;
