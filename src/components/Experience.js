import React from 'react'
import { experience } from './../Data/experience'

const Experience = () => {

  return (
    <div id="experience">
      <h2>Experience</h2>

      <div>
        {
          experience.map(({id, position, period, name, address, phone, tasks}) => {
            return (

              <div key={id}>
              <h4>{position}</h4>
              <h4>{name}</h4>
              <p>{period}</p>
              <p>{address}</p>
              <p>{phone}</p>

              <ul className='list-group'>
              {
                tasks.map(task => {
                  return (
                    <li key={task} className="list-group-item">{task}</li>
                  )
                })
              }

              </ul>


              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Experience
