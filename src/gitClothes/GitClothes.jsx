import React from "react";

const GitClothes = () => {
  return (
    <div className="App">
      <div className="text">
        <p>
          Git-clothes is{" "}
          <span className="mediumaquamarine">
            a full stack e-commerce application
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
    </div>
  );
};

export default GitClothes;
