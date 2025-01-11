import React from 'react'
import './SmallBusiness.css'
import picture01 from '../../assets/sbpic01.png'
import picture02 from '../../assets/sbpic02.png'
import picture03 from '../../assets/sbpic03.png'


const SmallBusiness = () => {
  return (
    <div className='smallbusiness'>
      
        <img src={picture01} alt="pic01"/>
        <img src={picture02} alt="pic02"/>
      <img src={picture03} alt="pic03"/>
       <div className='smallbusinesstext'>
        <br/>
        <h3>SMALL BUSINESS</h3>
        
        <br/>
        <p>Twistyle offers a curated collection of trendy and timeless accessories,
             from statement jewelry and elegant scarves to chic handbags and unique gifts.  
             With a focus on quality, affordability,   and personal expression,
             Twistyle is the go-to destination  for those  looking to elevate their look or find the perfect gift. 
              Step into a world of style and   discover something special at Twistyle!</p>
      </div>
        
      
    </div>
  )
}

export default SmallBusiness
