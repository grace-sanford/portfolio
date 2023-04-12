import "../App.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { RiPaintFill } from "react-icons/ri";
import { GiClothespin } from "react-icons/gi";

const Links = () => {
  return (
    <div className="text">
    <p>The links below point to external resources. Materials not linked here can be found on <a href="https://github.com/grace-sanford">GitHub</a>.</p>
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
        href="https://www.youtube.com/watch?v=B_2WXO_AKPU&list=PLx0iOsdUOUmm3RLOnoRpUArwuuVa5_u9r&index=4"
        target="_blank"
      >
        <RiPaintFill />
        Gallery House - Fullstack gallery wall app - Video Walk-Through
      </ListGroup.Item>
      <ListGroup.Item
        action
        variant="light"
        href="https://git-clothes.onrender.com/"
        target="_blank"
      >
        <GiClothespin />
        Git-clothes - Fullstack e-commerce website - Deployed Site
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
};

export default Links;
