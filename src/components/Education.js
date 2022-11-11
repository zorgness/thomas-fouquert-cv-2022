import React from 'react'
import { educations } from './../Data/educations'

const Education = () => {
  console.log(educations)

  return (
    <div>
    <h2>Education</h2>

      <div>
        {
          educations.map(({id, year, name, description}) => {
            return (
              <div key={id}>
                <h4>{year}</h4>
                <h4>{name}</h4>

                <p>{description}</p>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
