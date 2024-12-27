import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarbrand'> 
            <Link to="/"> Movie App</Link>

        </div>

        <div className='navbarlinks'> 
            <Link to="/" className='navlinks'> Home</Link>
            <Link to="/Fav" className='navlinks'> Favorites</Link>

        </div>
    </div>
  )
}

export default Navbar