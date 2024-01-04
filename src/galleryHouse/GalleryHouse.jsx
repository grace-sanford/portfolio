import React from "react";
import Container from "react-bootstrap/Container";

const GalleryHouse = () => (
  <div className="sectionGH" id="galleryhouse">
    <Container>
      <div className="text">
        <img className="gallery-house-img" src="gallery-house.png" alt="" />
        <picture>
          <source
            media="(max-width: 799px)"
            srcSet="gallery-house-img-sm.jpg" />
          <source
            media="(min-width: 800px)"
            srcSet="gallery-house-img-bg.jpg" />
          <img className="gallery-house-img" src="gallery-house.png" alt="" />
        </picture>
        <p>
          Gallery House is{" "}
          <span className="pink">
            an eye-catching full-stack gallery wall application
          </span>
          . My team's <span className="yellowgreen">project repository</span>,
          including development assets, can be found on{" "}
          <a
            href="https://github.com/gamk-capstone/gallery-house"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          . A <span className="gold">video walk-through</span> of our
          application can be found on{" "}
          <a href="https://www.youtube.com/watch?v=B_2WXO_AKPU&list=PLx0iOsdUOUmm3RLOnoRpUArwuuVa5_u9r&index=4">
            YouTube
          </a>{" "}
          and below.{" "}
            Also, check out my article documenting my team's process to select and use
            a third-party API, "Implementing Etsy Open API v3 in a Web
            Application," on{" "}
            <a
              href="https://medium.com/@gracesanford/implementing-etsy-open-api-v3-in-a-web-application-66cd61b2c4cb"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>.
        </p>
        <p>
          {/* Our <span className="yellowgreen">project repository</span>, including
          development assets, can be found on{" "}
          <a
            href="https://github.com/gamk-capstone/gallery-house"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          . */}
        </p>
        <p>
          {/* A <span className="gold">video walk-through</span> of our application
          can be found on{" "}
          <a href="https://www.youtube.com/watch?v=B_2WXO_AKPU&list=PLx0iOsdUOUmm3RLOnoRpUArwuuVa5_u9r&index=4">
            YouTube
          </a>{" "}
          and below. */}
        </p>
        <div className="videoWrapper">
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/B_2WXO_AKPU"
            title="Embedded youtube"
            width="375px"
            height="300px"
            allowFullScreen
          ></iframe>
        </div>
        {/* <AlertDismissible className="alert" /> */}
      </div>
    </Container>
  </div>
);

export default GalleryHouse;
