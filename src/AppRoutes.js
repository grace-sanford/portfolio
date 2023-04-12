import { Route, Routes } from "react-router-dom";
import React from "react";
import AboutMe from "./aboutMe/AboutMe.jsx"
import Links from "./links/Links.jsx"
import ContactForm from "./contactForm/ContactForm.jsx"

const AppRoutes = () => {
  return <>
  <Routes>
    <Route path="/*" element={null} />
    <Route path="/about" element={<AboutMe />}></Route>
    <Route path="/links" element={<Links />}></Route>
    <Route path="/contact" element={<ContactForm />}></Route>
  </Routes>
  </>;
};

export default AppRoutes;
