import React from "react";
import { Container } from "react-bootstrap";

const Clutter = () => {
  return (
    <div className="text" id="clutter">
      <Container>
        CLUTTER is a <span className="lightblue">party game from my childhood</span>. Get to know the app by
        checking it out on{" "}
        <a href="https://clutter.vercel.app/" target="_blank" rel="noreferrer">
          Vercel
        </a>
        . <span className="pink">Source code</span> is avaliable{" "}
        <a
          href="https://github.com/grace-sanford/clutter"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and an article detailing <span className="yellowgreen">development process</span> is avaliable on{" "}
        <a
          href="https://medium.com/@gracesanford/which-comes-first-endpoints-or-ui-cd8b3cd61101"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
        .
      </Container>
    </div>
  );
};

export default Clutter;
