import React from "react";
import { skills } from "./../Data/skills";
import { importAll } from "../utils/importAll";

const Skill = () => {
  const images = importAll(
    require.context("../images/skills", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div id="skill">
      <h4>Autres Compétences</h4>

      <ul className="list-group">
        {skills.map(({ id, name, description }) => {
          return (
            <li
              key={id}
              className="list-group-item text-start bg-secondary"
              style={{ border: "none" }}
            >
              <img
                src={images[`${name}.png`]}
                alt={name}
                className="avatar-square"
              />
              <span className="mx-5">{description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skill;
