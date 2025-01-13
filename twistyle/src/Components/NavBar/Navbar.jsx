import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import shoppingcart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'


const Navbar = () => {
  const[menu,setMenu]=useState("newarrivals");
  return (
    <div>
      <nav className='container'>
      <img src={logo} alt="logo" className='logo'/>
      <ul className='iconbar-list'>
     
        <li onClick={()=>{setMenu("newarrivals")}} >New Arrivals{menu==="newarrivals"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sale")}}>Sale{menu==="sale"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("about")}}>About{menu==="about"?<hr/>:<></>}</li>

        <li><img src={shoppingcart} alt='cart'/> </li>
        <li><img src={user} alt='user'/></li>
        <li><button className='btn1'>Log</button></li>
       
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
