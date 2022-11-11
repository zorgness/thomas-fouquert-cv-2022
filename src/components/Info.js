import React from 'react'
import { info } from './../Data/info'
import { importAll } from '../utils/importAll'

const Info = () => {

   const images = importAll(require.context('../images/icon-info', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='m-2'>

    <ul className='list-group'>
      {
        info.map(({id, name, data}) => {
          return (

            <li key={id} className="list-group-item text-start " style={{border: "none"}}>
              <img src={images[`${name}.png`]} alt={name} className='avatar-square'/>
              <span className='mx-2'>{data}</span>
            </li>

          )
        })

      }
    </ul>

    </div>
  )
}

export default Info
