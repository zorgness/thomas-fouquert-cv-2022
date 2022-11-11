import React from 'react'
import { projects } from '../Data/projects'

const Project = () => {
  console.log(projects)

  return (
    <div id="project">
      <h2>Project</h2>

      <div>
        {
          projects.map(({id, language, imageUrl, link, name, description}) => {
            return (

              <div key={id}>
                <img src={imageUrl} alt={name} className="avatar-square2" />
                <h2>{language}</h2>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{link}</p>

              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Project
