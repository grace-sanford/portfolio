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
              <span >Hi</span>, <br />
              I'm <span className="turquoise">Grace</span>
              <br />
              <span className="cyan">
                Software <br />
              </span>
              <span className="cyan">Developer</span> <br />
              and <span className="pink">Poet</span>
            </h2>
          </>
        ) : (
          <MyNavDropdown clicked={clicked} setClicked={setClicked} />
        )}
      </div>
    </>
  );
}

export default Home;
