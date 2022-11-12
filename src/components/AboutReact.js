import React from 'react'
import { aboutReact } from '../Data/aboutReact'
import imgReact from './../images/languages/React-JS.png'

const AboutReact = () => {

  return (
    <div id="aboutReact">

      <h2 className='mb-4'>React JS <img src={imgReact} alt="" className='avatar-square'/></h2>

      <ul className='list-group'>
        {
          aboutReact.map(({id, name, data}) => {
            return (
              <li key={id} className="list-group-item border-0">
                <div className='d-flex flex-column'>
                  <h4 className='mb-2 text-secondary'>{name}</h4>
                  <pre>{data}</pre>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AboutReact
