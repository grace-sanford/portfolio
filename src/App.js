import "./App.css";
import React, { useState } from "react";
// import Home from "./home/Home.jsx";
import AppRoutes from "./AppRoutes";
import NavButton from "./navButton/NavButton";

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <NavButton clicked={clicked} setClicked={setClicked} />
      <AppRoutes clicked={clicked}/>
    </>
  );
}

export default App;
