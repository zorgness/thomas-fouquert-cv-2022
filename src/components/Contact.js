import React from 'react'
import { contacts } from '../Data/contacts'
import { importAll } from '../utils/importAll'

const Contact = () => {

  const images = importAll(require.context('../images/icon-info', false, /\.(png|jpe?g|svg)$/));

  return (
    <div id="contact">

      <h2 className='mb-4'>Contact</h2>

      <ul className='list-group'>
        {
          contacts.map(({id, name, data, type}) => {
            return (

              <li key={id} className="list-group-item text-start  bg-secondary" style={{border: "none"}}>
                <img src={images[`${name}.png`]} alt={name} className='avatar-square'/>

                   {type === 'email' && <a href={`mailto:${data}`} className='mx-2'>{data}</a>}
                   {type === "phone" && <a href={`tel:${data}`} className='mx-2'>{data}</a>}
                   {type === 'link'  && <a href={`https://${data}`} className='mx-2'>{data}</a>}
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
