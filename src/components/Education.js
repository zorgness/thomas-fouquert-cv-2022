import React from 'react'
import { educations } from './../Data/educations'

const Education = () => {
  console.log(educations)

  return (
    <div id="education">

      <h2>Education</h2>

      <div>
        {
          educations.map(({id, year, name, description}) => {
            return (
              <div key={id}>
                <h4>{year}</h4>
                <h4>{name}</h4>
                <p style={{width: '200px', fontSize: '8px'}} className="mx-4">{description}</p>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
