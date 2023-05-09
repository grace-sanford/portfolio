import "../App.css";
import React from "react";
import MyNavDropdown from "../nav/MyNavDropdown";

function Home({ clicked, setClicked }) {
  return (
    <>
      <div className="App">
        {!clicked ? (
          <>
            <h2 className="homepage-header">
              <span className="hi">
                Hi, <br />
              </span>
              <span className="ml-1">
                I'm Grace,
                <br />
              </span>
              <span className="ml-2">
                Full Stack <br />
              </span>
              <span className="ml-3">
                Software <br />
              </span>
              <span className="ml-4">
                Developer, <br />
              </span>
              <span className="ml-2k">and Poet</span>
            </h2>
          </>
        ) : (
          <MyNavDropdown />
        )}
      </div>
    </>
  );
}

export default Home;
