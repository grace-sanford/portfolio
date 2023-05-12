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
              <span className="lightpurple">
                Hi, <br />
              </span>
              <span className="turquoise">
                I'm Grace,
                <br />
              </span>
              <span className="cyan">
                Full Stack <br />
              </span>
              <span className="cyan">
                Software <br />
              </span>
              <span className="cyan">
                Developer, <br />
              </span>
              <span className="pink">and Poet</span>
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
