import React from "react";
import { footerData } from "../Data/footer";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-around bg-success">
      <h5>Développer avec: </h5>
      {footerData.map(({ id, language }) => {
        return <p key={id}>{language}</p>;
      })}
    </div>
  );
};

export default Footer;
