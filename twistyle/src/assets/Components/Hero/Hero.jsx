import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow-right.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
           <p>
            <h1 className='text'>HOME <hr/> OF  SCRUNCHIES</h1>
 
          <br/>
          <br/>
          <br/>
          
           <button className='btn'>SHOP NOW<img src={arrow} alt="arrow"/></button>
           </p>
           
        </div>
      
    </div>
  )
}

export default Hero
