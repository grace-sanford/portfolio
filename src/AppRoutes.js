import { Route, Routes } from "react-router-dom";
import React from "react";
import MyNavDropdown from "./nav/MyNavDropdown.jsx";

const AppRoutes = () => {
  return <>
  <Routes>
    <Route path="/nav" element={<MyNavDropdown />}></Route>
  </Routes>
  </>;
};

export default AppRoutes;
