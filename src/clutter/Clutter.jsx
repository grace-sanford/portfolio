import React from "react";
import { Container } from "react-bootstrap";

const Clutter = () => {
  return (
    <div className="text" id="clutter">
      <h2 className="bold mt-5 text-red">CLUTTER</h2>
      <img className="clutter-img" src="clutter.png" alt="" />
      <picture>
        <source media="(max-width: 799px)" srcSet="clutter-img-sm.jpg" />
        <source media="(min-width: 800px)" srcSet="clutter-img-bg.jpg" />
        <img className="clutter-img" src="clutter.png" alt="" />
      </picture>
      <Container>
      {/* <h2 className="bold mt-5 mb-5 text-red-400">CLUTTER</h2>
      <img className="clutter-img" src="clutter.png" alt="" />
      <picture>
        <source media="(max-width: 799px)" srcSet="clutter-img-sm.jpg" />
        <source media="(min-width: 800px)" srcSet="clutter-img-bg.jpg" />
        <img className="clutter-img" src="clutter.png" alt="" />
      </picture> */}
        <p>
          CLUTTER is a{" "}
          <span className="lightblue">party game from my childhood</span>. Get
          to know the app by checking it out on{" "}
          <a
            href="https://clutter.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
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
          and an article detailing{" "}
          <span className="yellowgreen">development process</span> is avaliable
          on{" "}
          <a
            href="https://medium.com/@gracesanford/which-comes-first-endpoints-or-ui-cd8b3cd61101"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
          .
        </p>
      </Container>
    </div>
  );
};

export default Clutter;
