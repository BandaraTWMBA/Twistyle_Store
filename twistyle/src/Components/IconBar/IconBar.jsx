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
                <li><a href="https://www.instagram.com/?hl=en" target="_blank"><img src={instagram} alt="" /></a></li>
                <li><a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank"><img src={facebook} alt="" /></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><img src={youtube} alt="" /></a></li>
                <li><a href="https://email.com/lander" target="_blank"><img src={envelope} alt="" /></a></li>
                
              </ul>
            
      
    </div>
  )
}

export default IconBar
