import React from 'react'
import { experience } from './../Data/experience'

const Experience = () => {

  return (
    <div id="experience" className='container'>

      <h2 className='mb-4'>Experience</h2>

      <div>
        {
          experience.map(({id, position, period, name, address, phone, tasks}) => {
            return (

              <div key={id}>
                <h5>{name}</h5>
                <h6>{position}</h6>
                <p>{period}</p>
                <p>{address}</p>
                <p>{phone}</p>

              <ul className='list-group mx-4'>
              {
                tasks.map(task => {
                  return (
                    <li key={task} className="">{task}</li>
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
