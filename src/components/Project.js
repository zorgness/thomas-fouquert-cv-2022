import React from "react";
import { projects } from "../Data/projects";

const Project = () => {
  return (
    <div id="project">
      <h2 className="mb-4">Projets</h2>

      <div>
        {projects.map(
          ({ id, language, imageUrl, link, name, description, github }) => {
            return (
              <div key={id} className="mb-5">
                <h4>{language}</h4>
                <h5 className="text-secondary">{name}</h5>
                <p>{description}</p>

                <div className="d-flex flex-wrap justify-content-between">
                  <img src={imageUrl} alt={name} className="avatar-square2" />

                  <div className="d-flex flex-column gap-3">
                    {link !== null ? (
                      <a href={link} className="btn btn-success text-white">
                        lien vers le site
                      </a>
                    ) : (
                      <button className="btn btn-light">not available</button>
                    )}

                    <a
                      href={github[0].frontEnd}
                      className="btn btn-secondary text-white"
                    >
                      code front
                    </a>

                    {github[1]?.backEnd !== null ? (
                      <a
                        href={github[1]?.backEnd}
                        className="btn btn-info text-white"
                      >
                        code back
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Project;
