import React from "react";
import ghost from "./images/ghost.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="text-center">
        <img src={ghost} alt="" className="App-logo mt-5" /> <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loader;
