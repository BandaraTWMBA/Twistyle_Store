import React from 'react'
import './Earrings.css'
import cart from '../../assets/shopping-cart1.png'
import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.jpg'
import e3 from '../../assets/e3.jpg'
import e4 from '../../assets/e4.jpg'
import e5 from '../../assets/e5.jpg'
import e6 from '../../assets/e6.jpg'
import e7 from '../../assets/e7.jpg'
import e8 from '../../assets/e8.jpg'
import e9 from '../../assets/e9.jpg'
import e10 from '../../assets/e10.jpg'
import e11 from '../../assets/e11.jpg'
import e12 from '../../assets/e12.jpg'



const Earrings = () => {


  const menueitems = [
       {
            name: 'Earrings_01',
            image: e1,
            price: 'Rs.250'
          },
          {
            name: 'Earrings_02',
            image: e2,
            price: 'Rs.200'
          },
          {
            name: 'Earrings_03',
            image: e3,
            price: 'Rs.200'
          },
          {
            name: 'Earrings_04',
            image: e4,
            price: 'Rs.290'
          },
          {
            name: 'Earrings_05',
            image: e5,
            price: 'Rs.200'
          },
          {
            name: 'Earrings_06',
            image: e6,
            price: 'Rs.200'
          },
          {
            name: 'Earrings_07',
            image: e7,
            price: 'Rs.250'
          },
          {
            name: 'Earrings_08',
            image: e8,
            price: 'Rs.250'
          },
          {
            name: 'Earrings_09',
            image: e9,
            price: 'Rs.250'
          },
          {
            name: 'Earrings_10',
            image: e10,
            price: 'Rs.250'
          },
          {
            name: 'Earrings_11',
            image: e11,
            price: 'Rs.200'
          },
          {
            name: 'Earrings_12',
            image: e12,
            price: 'Rs.200'
          },
   
    
    ];
  

  const earrings=menueitems.slice(0,12);

      return (<>
        <h1 className='earrings'>EARRINGS</h1>
        
          <section className="card-container">
            
          {earrings.map((item,index)=> (
              
              <section className="card1" key={index}>
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

export default Earrings
