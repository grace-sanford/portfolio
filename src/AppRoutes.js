import { Route, Routes } from "react-router-dom";
import React from "react";
import AboutMe from "./aboutMe/AboutMe.jsx";
import Links from "./links/Links.jsx";
import ContactForm from "./contactForm/ContactForm.jsx";
import GalleryHouse from "./galleryHouse/GalleryHouse.jsx";
import GitClothes from "./gitClothes/GitClothes.jsx";

const AppRoutes = ({ clicked }) => {
  return (
    <>
      {clicked ? (
        <Routes>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/galleryhouse" element={<GalleryHouse />}></Route>
          <Route path="/gitclothes" element={<GitClothes />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={null} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
