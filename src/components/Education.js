import React from 'react'
import { educations } from './../Data/educations'

const Education = () => {

  return (
    <div id="education">

      <h2>Education</h2>

      <div>
        {
          educations.map(({id, year, name, description, type}) => {
            return (
              <div key={id}>
                <h4>{year}</h4>
                <h4>{name}</h4>

                {
                  type === 'link'
                  ? <p className="mx-4"><a href={description} >Lien du certificat</a></p>
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
