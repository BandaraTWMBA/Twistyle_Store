import React from 'react'
import './IconBar.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import envelope from '../../assets/envelope.png'

const IconBar = () => {
  return (
    <div className='iconbar'>
        
             
              <ul>
                <li><img src={instagram} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={youtube} alt="" /></li>
                <li><img src={envelope} alt="" /></li>
                
              </ul>
            
      
    </div>
  )
}

export default IconBar
