import React from "react";
import { profile } from "./../Data/profile";
import TextProfile from "./TextProfile";
import imgProfile from "../images/profile/profile.jpg";
import Button from "react-bootstrap/Button";
import { downloadCv } from "../utils/downloadCv";
import Balancer from "react-wrap-balancer";

const Profile = () => {
  const styles = {
    backgroundImage: `url(${imgProfile})`,
    backgroundSize: "cover",
    backgroundPosition: "center top -7px",
  };

  const { id, position, text } = profile[0];

  const handleClick = () => {
    downloadCv();
  };

  return (
    <div id="profile" className="my-5" key={id}>
      <div className="text-end m-3 lap-top">
        <Button onClick={handleClick} className="btn btn-success">
          downloadCv{" "}
        </Button>
      </div>

      <div className="phone">
        <div className="d-flex align-items-center justify-content-around mb-3">
          <Button onClick={handleClick} className="btn btn-success">
            Dowload CV
          </Button>
          <div alt="Profile" className="avatar" style={styles}></div>
        </div>
      </div>

      <h4 className="title2 text-decoration-underline text-center">
        <Balancer>{position}</Balancer>
      </h4>

      <div className="d-flex align-items-center justify-content-start mb-5">
        <h1 className="title text-decoration-underline">
          <Balancer>{position}</Balancer>
        </h1>
        <div alt="Profile" className="avatar mx-4 lap-top" style={styles}></div>
      </div>

      <div className="">
        {text.map(({ id, text }) => {
          return <TextProfile key={id} position={id} text={text} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
