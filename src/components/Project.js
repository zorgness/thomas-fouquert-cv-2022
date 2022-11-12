import React from 'react'
import { projects } from '../Data/projects'

const Project = () => {

  return (
    <div id="project">

      <h2 className='mb-4'>Projet</h2>

      <div>
        {
          projects.map(({id, language, imageUrl, link, name, description, github}) => {
            return (

              <div key={id} className="mb-3">
                <h4>{language}</h4>
                <h5 className='text-secondary'>{name}</h5>
                <p>{description}</p>

                <div className='d-flex flex-wrap justify-content-between'>
                  <img src={imageUrl} alt={name} className="avatar-square2" />

                  <div>
                    <a href={link} className="btn btn-success text-white">lien vers le site</a>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Project
