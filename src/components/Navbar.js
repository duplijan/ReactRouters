import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
  return(
    <nav className='nav-wrapper green darken-3'>
      <div className='container'>
        <a className='brand-logo'>React ROUTER</a>
        <ul className='right'>
          <li><NavLink to="/"> Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
