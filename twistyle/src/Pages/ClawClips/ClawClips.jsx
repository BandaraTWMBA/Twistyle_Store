import React from 'react'
import './ClawClips.css'
import scrunch1 from '../../assets/scrunch1.jpg'
import cart from '../../assets/shopping-cart1.png'

const ClawClips = () => {


  const menueitems = [
      {
        name: 'Scrunchie_01',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_02',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_03',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_04',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_05',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_06',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_07',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_08',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_09',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_10',
        image: scrunch1,
        price: 'Rs.200'
      },
    ];
  

  const clawclips=menueitems.slice(5,9);

      return (
        
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

      
      
    )
  
}

export default ClawClips
