import React from 'react'
import { info } from '../Data/info'
import { importAll } from '../utils/importAll'

const Contact = () => {

  const images = importAll(require.context('../images/icon-info', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='m-2' id="contact">

      <h2>Contact</h2>

      <ul className='list-group'>
        {
          info.map(({id, name, data, type}) => {
            return (

              <li key={id} className="list-group-item text-start " style={{border: "none"}}>
                <img src={images[`${name}.png`]} alt={name} className='avatar-square'/>

                   {type === 'email' && <a href={`mailto:${data}`} className='mx-2'>{data}</a>}
                   {type === "phone" && <a href={`tel:${data}`} className='mx-2'>{data}</a>}
                   {type === 'link'  && <a href={data} className='mx-2'>{data}</a>}
                   {type === 'text' && <span className='mx-2'>{data}</span>}
              </li>

            )
          })

        }
      </ul>

    </div>
  )
}

export default Contact
