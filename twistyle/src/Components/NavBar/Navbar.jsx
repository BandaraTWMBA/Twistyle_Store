import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import shoppingcart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'


const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div>
      <nav className='container'>
      <a href='http://localhost:5173/' ><img src={logo} alt="logo" className='logo'/></a>
      <ul className='iconbar-list'>
     
        <li onClick={()=>{setMenu("newarrivals")}} ><a href='http://localhost:5173/NewArrivals'>New Arrivals</a>{menu==="newarrivals"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("shop")}}><a href='http://localhost:5173/Shop'>Shop</a>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sale")}}><a href='http://localhost:5173/Sale'>Sale</a>{menu==="sale"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("about")}}><a href='http://localhost:5173/About'>About</a>{menu==="about"?<hr/>:<></>}</li>
       
        

        <li><img src={shoppingcart} alt='cart'/> </li>
        {/* <li><img src={user} alt='user'/></li> */}
        <li><button className='btn1'><a href="http://localhost:5173/login">Log</a></button></li>
       
       
      </ul>
      
      </nav>
    </div>
  )
}


export default Navbar
