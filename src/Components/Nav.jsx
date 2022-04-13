import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='navigation'>
        <nav className="navbar navbar-expand navbar-dark bg-dark pt-3 pb-3">
            <div className='ml-5'>
                <Link className='' to='/'>
                    <img className='w-25' src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-256.png" alt="logo" />
                </Link>
            </div>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item mx-5'>
                    <Link className='nav-link' to='/Signup'>Signup</Link>
                </li>
                <li className='nav-item mr-5'>
                    <Link className='nav-link' to='/Login'>Login</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav