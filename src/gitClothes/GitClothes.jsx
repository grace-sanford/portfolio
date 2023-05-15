import React from "react";
import Container from "react-bootstrap/Container";

const GitClothes = () => {
  return (
    <div className="section" id="gitclothes">
      <Container>
        <div className="text">
          <h3>Git Clothes</h3>
          <p>
            Git-clothes is{" "}
            <span className="turquoise">
              a full stack mock e-commerce application
            </span>
            .
          </p>
          <p>
            Our <span className="lightblue">project repository</span> can be
            found on{" "}
            <a
              href="https://github.com/GraceShopper-J-E-G-M/Git-Clothes"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
          <p>
            Our latest <span className="cyan">deployed site</span> can be found{" "}
            <a
              href="https://git-clothes.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>

          {/**Responsive images with `picture` element. Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images */}
          <img
            className="git-clothes-img"
            src="./git-clothes-screenshot.jpg"
            alt=""
          ></img>
          <picture>
            <source media="(max-width: 799px)" srcset="git-clothes-sm.jpg" />
            <source media="(min-width: 800px)" srcset="git-clothes-bg.jpg" />
          </picture>
        </div>
      </Container>
    </div>
  );
};

export default GitClothes;
