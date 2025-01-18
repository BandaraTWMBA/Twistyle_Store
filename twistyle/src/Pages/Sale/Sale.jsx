import React from 'react'
import './Sale.css'
import cart from '../../assets/shopping-cart1.png'
import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.jpg'
import e3 from '../../assets/e3.jpg'
import c8 from '../../assets/c8.jpg'
import c9 from '../../assets/c9.jpg'
import c10 from '../../assets/c10.jpg'
import scrunch1 from '../../assets/scrunch1.jpg'
import scrunch2 from '../../assets/scrunch2.jpg'

const Sale = () => {

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
            name: 'Scrunchie_01',
             image: scrunch1,
             price: 'Rs.200'
          },
          {
             name: 'Scrunchie_02',
             image: scrunch2,
             price: 'Rs.250'
          },
         
          
    
    ];
   const sale=menueitems.slice(0,12);
   
         return (
           <>
            <h1 className='sale'>SALE</h1>
             <section className="card-container">
               
             {sale.map((item,index)=> (
                 
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
   
   export default Sale
