import React from "react";
import AlertDismissible from "../alertDismissible/AlertDismissible";

const GalleryHouse = () => {
  return (
    <div className="App">
      <picture>
        <source media="(max-width: 799px)" srcset="gallery-house-img-sm.jpg" />
        <source media="(min-width: 800px)" srcset="gallery-house-img-bg.jpg" />
        <img src="./gallery-house.png" alt="" />
      </picture>
      <img className="gallery-house-img" src="./gallery-house.png" alt=""></img>
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
        <AlertDismissible className="alert" />
      </div>
    </div>
  );
};

export default GalleryHouse;
