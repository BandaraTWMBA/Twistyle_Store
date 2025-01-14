import React from 'react'
import './Info.css'
import IconBar from '../../Components/IconBar/IconBar'
import Navbar from '../../Components/NavBar/Navbar'
import shippingpic1 from '../../assets/shippingpic1.jpg'
import Footer from '../../Components/Footer/Footer'
import infopic2 from '../../assets/infopic2.png'


const Info = () => {
  return (
    <div>
      <h1 className='information'>INFORMATION</h1>
      <div className='info'>
        
        <div className='info-shipping'>
      
          <h3>SHIPPING</h3>
      
          <p>We provide fast and reliable shipping to ensure your order reaches you promptly. 
            Orders are processed within 1-2 business days, with delivery times varying based on your location. 
            Enjoy free shipping on orders over a specified amount. 
            Tracking details will be shared once your package is dispatched. Your satisfaction is our priority.</p>

            <br/>
            
           
        </div>

        <img className='shipping-pic' src={shippingpic1} alt='pic1'/>
      </div>
      <div className='terms'>
        
        <div className='info-terms'>
      
          <h3>TERMS & CONDITIONS</h3>
      
          <p>By accessing or using this website, you agree to be bound by these te
            rms and conditions. These terms outline the rules and regulations for using our services, 
            including any purchases, account registration, and interactions on the site. We reserve the right
             to modify or update these terms at any time, and such changes will be effective immediately upon posting.
              Please review this page regularly to stay informed. If you do not agree with any part of these terms, 
            you are advised not to use our website or services.</p>

            <br/>
            
           
        </div>

        <img className='infopic2' src={infopic2} alt='pic2'/>
      </div>
     
      
      
    </div>
  )
}

export default Info
