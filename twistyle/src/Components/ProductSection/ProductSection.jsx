
import React from 'react'
import './ProductSection.css'
import scrunchies from '../../assets/scrunchies.png'
import earrings from '../../assets/earrings.png'
import clawclips from '../../assets/clawclips.png'

const ProductSection = () => {
  return (
    <div className='sections'>
        <div className="section">
            <img src={scrunchies} alt ="scrunchies"/>
            <div className="caption">
            <a href='http://localhost:5173/scrunchies'><button className='btnp '>SCRUNCHIES</button></a>
            </div>
        </div>
        <div className="section">    
            <img src={earrings} alt ="earrings"/>   
            <div className="caption">
               <a href='http://localhost:5173/earrings'><button className='btnp '>EARRINGS</button></a> 
            </div>   
        </div>
         <div className="section">
             <img src={clawclips} alt ="clawclips"/>
             <div className="caption">
             <a href='http://localhost:5173/ClawClips'><button className='btnp '>CLAWCLIPS</button></a>
             </div>
        </div>
    </div>
  )
}

export default ProductSection

