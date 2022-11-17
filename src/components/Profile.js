import React from 'react'
import { profile } from './../Data/profile'
import imgProfile from '../images/profile/profile.jpg'
import Button from 'react-bootstrap/Button';
import { downloadCv } from '../utils/downloadCv';

const Profile = () => {

  const styles = {
    backgroundImage: `url(${imgProfile})`,
    backgroundSize: 'cover'
  };

  const {id, position, text1, text2} = profile[0]

  const handleClick = () => {

    downloadCv()

}


  return (
    <div id="profile" className='my-5' key={id}>

        <div className="text-end m-3 lap-top">

          <Button onClick={handleClick} className='btn btn-success'>Download CV</Button>
        </div>

        <div className='phone'>
          <div className="d-flex align-items-center justify-content-around mb-3">
            <Button onClick={handleClick} className='btn btn-success'>Dowload CV</Button>
            <div alt="Profile" className='avatar' style={styles}></div>
          </div>
        </div>

        <h4 className='title2 text-decoration-underline text-center'>{position}</h4>

        <div className="d-flex align-items-center justify-content-start mb-5" >
          <h1 className='title text-decoration-underline'>{position}</h1>
          <div alt="Profile" className='avatar mx-4 lap-top' style={styles}></div>
        </div>

        <div className=''>
            <p style={{fontSize: '20px'}}>{text2}</p>

            <p style={{fontSize: '20px'}}>{text1}</p>
        </div>


    </div>
  )
}

export default Profile
