import React from 'react'
import { languages } from '../Data/languages'
import { importAll } from '../utils/importAll'

const Language = () => {

  const images = importAll(require.context('../images/languages', false, /\.(png|jpe?g|svg)$/));

  return (
    <div id="languages">

      <h2 className='mb-4'>Langages & Framework</h2>

      <ul className='list-group '>
      {
        languages.map(({id, name}) => {
          return (
            <li key={id} className="list-group-item text-start bg-secondary " style={{border: "none"}}>
              <img src={images[`${name}.png`]} alt={name} className='avatar-square'/>
              <span className='mx-5'>{name}</span>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Language
