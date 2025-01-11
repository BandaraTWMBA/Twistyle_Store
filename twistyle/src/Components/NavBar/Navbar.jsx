import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div>
        <nav className='container'>
      <img src={logo} alt="logo" className='logo'/>
      <ul className='iconbar-list'>
        <li>New Arrivals</li>
        <li>Shop</li>
        <li>Sale</li>
        <li>About</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
