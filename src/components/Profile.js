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
    <div id="profile" className='container' key={id}>


        {/* <div alt="Profile" className='avatar-large mx-4' style={styles}></div> */}
        <h2>{position}</h2>


        <p>{text2}</p>

        <p>{text1}</p>

    </div>
  )
}

export default Profile
