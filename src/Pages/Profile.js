import {React, useEffect, useState} from 'react'
import { NavPanel } from '../Components'

const Profile = () => {
  const [userData, setUserData] = useState(); 

  useEffect(()=>{
    // Get user data using bearer token
  },[])


  return (
    <div className='home-bg'>
      <NavPanel/>
      <section className='center-pnl'>
        <h4 style={{position:'sticky',top:'0',padding:'.5em 2em', backgroundImage:'linear-gradient(to right,rgba(255, 86, 120,.9), rgba(255, 245, 155,.9))'}}>
          PROFILE
        </h4>
        <div className='media-container'>
          User Information
        </div>
        <div className='media-container'>
          Posts
        </div>

      </section>
      <section className='right-pnl'></section>
    </div>
  )
}

export default Profile