import React from 'react'
import { Link } from "react-router-dom";

const NavPanel = () => {
  return (
    <>
    <section className='left-pnl'>
            <ul>
                <li><Link className='menu-itm' to={'/Home'}><i className='material-icons' style={{fontSize:'1.25em'}}>home</i> Home</Link></li>
                {/* <li><Link className='menu-itm' to={'/Home'}><i className='material-icons' style={{fontSize:'1.25em'}}>notifications</i><span className='badge'>3</span> Notifications</Link></li> */}
                {/* <li><Link className='menu-itm' to={'/Home'}><i className='material-icons' style={{fontSize:'1.25em'}}>local_post_office</i> Messages</Link></li> */}
                <li><Link className='menu-itm' to={'/Friends'}><i className='material-icons' style={{fontSize:'1.25em'}}>people</i> Friends</Link></li>
                <li><Link className='menu-itm' to={'/Profile'}><i className='material-icons' style={{fontSize:'1.25em'}}>person</i> Profile</Link></li>
                <li><Link className='menu-itm' to={'/Settings'}><i className='material-icons' style={{fontSize:'1.25em'}}>settings</i> Settings</Link></li>
                
            </ul>
        </section>
    </>
  )
}

export default NavPanel