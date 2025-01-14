import React from 'react'
import './Info.css'
import IconBar from '../../Components/IconBar/IconBar'
import Navbar from '../../Components/NavBar/Navbar'
import shippingpic1 from '../../assets/shippingpic1.jpg'
import Footer from '../../Components/Footer/Footer'


const Info = () => {
  return (
    <div>
      
      <div className='info'>
        <h1>INFORMATION</h1>
        <div className='info-shipping'>
      
          <h2>SHIPPING</h2>
      
          <p>We provide fast and reliable shipping to ensure your order reaches you promptly. 
            Orders are processed within 1-2 business days, with delivery times varying based on your location. 
            Enjoy free shipping on orders over a specified amount. 
            Tracking details will be shared once your package is dispatched. Your satisfaction is our priority.</p>

            <br/>
            
           
        </div>

        <img className='shipping-pic' src={shippingpic1} alt='pic1'/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Info
