import React from "react";

const GitClothes = () => {
  return (
    <div className="App">
      <div className="text">
        <p>
          Git-clothes is{" "}
          <span className="mediumaquamarine">
            a full stack mock e-commerce application
          </span>
          .
        </p>
        <p>
          Our <span className="blue">project repository</span> can be found on{" "}
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
          Our latest <span className="aqua">deployed site</span> can be found{" "}
          <a
            href="https://git-clothes.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
      {/**Responsive images with `picture` element. Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images */}
      <picture>
        <source media="(max-width: 799px)" srcset="git-clothes-sm.jpg" />
        <source media="(min-width: 800px)" srcset="git-clothes-bg.jpg" />
        <img src="./git-clothes-screenshot.jpg" alt="" />
      </picture>
      <img
        className="git-clothes-img"
        src="./git-clothes-screenshot.jpg"
        alt=""
      ></img>
    </div>
  );
};

export default GitClothes;
