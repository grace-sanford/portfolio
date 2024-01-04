import { Route, Routes } from "react-router-dom";
import React from "react";
import AboutMe from "./aboutMe/AboutMe.jsx";
import Links from "./links/Links.jsx";
import GalleryHouse from "./galleryHouse/GalleryHouse.jsx";
import GitClothes from "./gitClothes/GitClothes.jsx";
import Clutter from "./clutter/Clutter.jsx";

const AppRoutes = ({ clicked }) => {
  return (
    <>
      {clicked ? (
        <Routes>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/galleryhouse" element={<GalleryHouse />}></Route>
          <Route path="/gitclothes" element={<GitClothes />}></Route>
          <Route path="/clutter" element={<Clutter />}></Route>
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
