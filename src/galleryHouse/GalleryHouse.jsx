import React from "react";
import AlertDismissible from "../alertDismissible/AlertDismissible";
import Container from "react-bootstrap/Container";

const GalleryHouse = () => {
  return (
    <div className="sectionGH" id="galleryhouse">
      <Container>
        <hr />
        <div className="text">
          <img
            className="gallery-house-img"
            src="./gallery-house.png"
            alt=""
          ></img>
          <picture>
            <source
              media="(max-width: 799px)"
              srcset="gallery-house-img-sm.jpg"
            />
            <source
              media="(min-width: 800px)"
              srcset="gallery-house-img-bg.jpg"
            />
            <img src="./gallery-house.png" alt="" />
          </picture>
         
          <p>
            Gallery House is{" "}
            <span className="pink">
              an eye-catching gallery wall application
            </span>{" "}
            that makes curating the art on your wall not just easy, but fun!
          </p>
          <p>
            Our <span className="yellowgreen">project repository</span>,
            including development assests can be found on{" "}
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
            Our latest <span className="lightpurple">deployed site</span> can be
            found{" "}
            <a
              href="https://gallery-house.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            A <span className="gold">video walk-through</span> of our
            application can be found on{" "}
            <a
              href="https://www.youtube.com/watch?v=B_2WXO_AKPU&list=PLx0iOsdUOUmm3RLOnoRpUArwuuVa5_u9r&index=4
"
            >
              Youtube
            </a>{" "}
            and below.
          </p>
          </div>
          <div className="videoWrapper">
            <iframe
              className="vid"
              src="https://www.youtube.com/embed/B_2WXO_AKPU"
              title="Embedded youtube"
              width="375px"
              height="300px"
              allowfullscreen
            ></iframe>
          </div>
          <AlertDismissible className="alert" />
      </Container>
    </div>
  );
};

export default GalleryHouse;
