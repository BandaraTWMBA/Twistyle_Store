import React from 'react'
import './Shop.css'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import shop3 from '../../assets/shop3.png'
import shop4 from '../../assets/shop4.png'
import shop5 from '../../assets/shop5.png'
import shop6 from '../../assets/shop6.png'
import shop7 from '../../assets/shop7.png'

const Shop = () => {
  return (
    <div className='shop'>
      
      <h1>SHOP</h1>

      <div className='shop-1'>
        <div className='box'>
          <img src={shop1} alt="pic01"/>
          <button className='btnshop'><a href="http://localhost:5173/scrunchies">SCRUNCHIES</a></button>
        </div>
        <div className='box'>
          <img src={shop2} alt="pic02"/>
          <button className='btnshop'><a href="http://localhost:5173/Clawclips">CLAWCLIPS</a></button>

        </div>
        <div className='box'>
          <img src={shop3} alt="pic03"/>
          <button className='btnshop'><a href="http://localhost:5173/earrings">EARRINGS</a></button>

        </div>
      </div>

      <div className='shop-2'>
        <img src={shop4} alt="pic04"/>
        <button className='btnshop'><a href="http://localhost:5173/products">SHOPNOW</a></button>
      </div>


      <div className='shop-3'>
        <img  src={shop5} alt="pic05"/>
        <img  src={shop6} alt="pic06"/>
        <img  src={shop7} alt="pic07"/>


      </div>
      
    </div>
  )
}

export default Shop
