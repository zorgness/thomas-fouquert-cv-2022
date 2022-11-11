import React from 'react'
import { projects } from '../Data/projects'

const Project = () => {

  return (
    <div id="project" className='container'>

      <h2 className='mb-4'>Project</h2>

      <div>
        {
          projects.map(({id, language, imageUrl, link, name, description}) => {
            return (

              <div key={id}>
                <img src={imageUrl} alt={name} className="avatar-square2" />
                <h2>{language}</h2>
                <h4>{name}</h4>
                <p>{description}</p>
                <a href={link}>lien vers le site</a>

              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Project
