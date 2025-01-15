import React from 'react'
import './ClawClips.css'

import cart from '../../assets/shopping-cart1.png'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'
import c6 from '../../assets/c6.jpg'
import c7 from '../../assets/c7.jpg'
import c8 from '../../assets/c8.jpg'
import c9 from '../../assets/c9.jpg'
import c10 from '../../assets/c10.jpg'
import c11 from '../../assets/c11.jpg'
import c12 from '../../assets/c12.jpg'

const ClawClips = () => {


  const menueitems = [
      {
           name: 'ClawClips_01',
           image: c1,
           price: 'Rs.200'
         },
         {
           name: 'ClawClips_02',
           image: c2,
           price: 'Rs.250'
         },
         {
           name: 'ClawClips_03',
           image: c3,
           price: 'Rs.200'
         },
         {
           name: 'ClawClips_04',
           image: c4,
           price: 'Rs.290'
         },
         {
           name: 'ClawClips_05',
           image: c5,
           price: 'Rs.290'
         },
         {
           name: 'ClawClips_06',
           image: c6,
           price: 'Rs.200'
         },
         {
           name: 'ClawClips_07',
           image: c7,
           price: 'Rs.250'
         },
         {
           name: 'ClawClips_08',
           image: c8,
           price: 'Rs.200'
         },
         {
           name: 'ClawClips_09',
           image: c9,
           price: 'Rs.280'
         },
         {
           name: 'ClawClips_10',
           image: c10,
           price: 'Rs.200'
         },
         {
           name: 'ClawClips_11',
           image: c11,
           price: 'Rs.200'
         },{
           name: 'ClawClips_12',
           image: c12,
           price: 'Rs.220'
         },
    ];
  

  const clawclips=menueitems.slice(0,12);

      return (<>
        <h1 className='name'>CLAWCLIPS</h1>
        
          <section className="card-container">
            
          {clawclips.map((item,index)=> (
              
              <section className="card" key={index}>
          <img src={item.image}  alt={item.name} className='card-img '/>
          <div className="card-details">
              <h3 className='card-title'>{item.name}</h3>
              <section className="card-reviews">
                  {/* <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /> */}
                     {/* <span className="total-reviews">4</span> */}
                    <section className="card-price">
                      <div className="price">
                          <del>Rs.300</del><p>{item.price}</p>
                      </div>
                      <div className="bag"><img src={cart} alt="cart"/></div>
                    </section>
              
              </section>
          </div>
          <button className="btnbuy">Buy Now</button>
      
         </section>
        
           ) )}
        
      </section>

      
    </>  
    )
  
}

export default ClawClips
