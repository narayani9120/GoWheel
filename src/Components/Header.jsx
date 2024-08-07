import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
    <div className='header-container'>
        <div className='logo'>
            <img src="src\assets\logo.png"></img>
            
        </div>
        <ol>
            <li>
                <Link to="/">About Us</Link>
            </li>
            <li>
                <Link to="/">Services</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/List">List</Link>
            </li>
        </ol>
        <div className='header-button'>
            <button>Login</button>
        </div>
    </div>

    

</nav>
    </>
  )
}

export default Header
