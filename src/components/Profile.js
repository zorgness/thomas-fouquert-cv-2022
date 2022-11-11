import React from 'react'
import { profile } from './../Data/profile'
import imgProfile from '../images/profile/profile.jpg'

const Profile = () => {

  const styles = {
    backgroundImage: `url(${imgProfile})`,
    backgroundSize: 'cover'
  };

  const {id, position, text1, text2} = profile[0]


  return (
    <div id="profile" className='mt-5' key={id}>

        <div className="d-flex align-items-center justify-content-start mb-3" >
          <h1>{position}</h1>
          <div alt="Profile" className='avatar mx-4' style={styles}></div>
        </div>

        <div className=''>
            <p style={{fontSize: '24px'}}>{text2}</p>

            <p style={{fontSize: '24px'}}>{text1}</p>
        </div>


    </div>
  )
}

export default Profile
