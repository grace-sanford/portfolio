import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav.jsx";
import Home from "./home/Home.jsx"
import React from "react";

const AppRoutes = () => {
  return <>
  <Routes>
    <Route path="/*" element={<Home />}></Route>
    <Route path="/nav" element={<Nav />}></Route>
  </Routes>
  </>;
};

export default AppRoutes;
