import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="text-center">
        <h2>Loading</h2>
        <Spinner animation="grow" className="m-2" size="sm" />
        <Spinner animation="grow" className="m-2" size="sm" />
        <Spinner animation="grow" className="m-2" size="sm" />
        <Spinner animation="grow" className="m-2" size="sm" />
      </div>
    </div>
  );
};

export default Loader;
