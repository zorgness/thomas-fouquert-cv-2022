import React from 'react'
import { educations } from './../Data/educations'

const Education = () => {

  return (
    <div id="education" className="container">

      <h2 className='mb-4'>Education</h2>

      <div>
        {
          educations.map(({id, year, name, description, type}) => {
            return (
              <div key={id}>
                <h5 className='text-secondary'>{year}</h5>
                <h5>{name}</h5>

                {
                  type === 'link'
                  ? <a href={description} className="btn btn-primary text-white mx-4" >Lien du certificat</a>
                  : <p className="mx-4">{description}</p>
                }

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
