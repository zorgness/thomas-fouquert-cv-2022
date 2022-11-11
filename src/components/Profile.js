import React from 'react'
import { profile } from './../Data/profile'
import imgProfile from '../images/profile/profile.jpg'

const Profile = () => {

  const styles = {
    backgroundImage: `url(${imgProfile})`,
    backgroundSize: 'cover'
  };

  const {id, position, text} = profile[0]


  return (
    <div id="profile" key={id}>

      <h2>{position}</h2>

      <p>{text}</p>

      <div
      alt="Profile"
      className='avatar-large'
      style={styles}>

      </div>
    </div>
  )
}

export default Profile
