import React from "react";

const GalleryHouse = () => {
  return (
    <div className="App">
      <div className="text">
        <p>
          Gallery House is{" "}
          <span className="pink">
            an eye-catching full stack gallery wall application
          </span>{" "}
          that makes curating the art on your wall not just easy, but fun!
        </p>
        <p>
          Our <span className="green">project repository</span>, including
          development assests can be found on{" "}
          <a
            href="https://github.com/gamk-capstone/gallery-house"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p>
          Our latest <span className="plum">deployed site</span> can be found{" "}
          <a
            href="https://gallery-house.onrender.com"
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

export default GalleryHouse;