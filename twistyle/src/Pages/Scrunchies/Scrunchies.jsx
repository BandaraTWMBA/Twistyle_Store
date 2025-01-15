import React from 'react'
import './Scrunchies.css'
import cart from '../../assets/shopping-cart1.png'
import scrunch1 from '../../assets/scrunch1.jpg'
import scrunch2 from '../../assets/scrunch2.jpg'
import scrunch3 from '../../assets/scrunch3.jpg'
import scrunch4 from '../../assets/scrunch4.jpg'
import scrunch5 from '../../assets/scrunch5.jpg'
import scrunch6 from '../../assets/scrunch6.jpg'
import scrunch7 from '../../assets/scrunch7.jpg'
import scrunch8 from '../../assets/scrunch8.jpg'
import scrunch9 from '../../assets/scrunch9.jpg'
import scrunch10 from '../../assets/scrunch10.jpg'
import scrunch11 from '../../assets/scrunch11.jpg'
import scrunch12 from '../../assets/scrunch12.jpg'

const Scrunchies = () => {


  const menueitems = [
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
          {
            name: 'Scrunchie_03',
            image: scrunch3,
            price: 'Rs.270'
          },
          {
            name: 'Scrunchie_04',
            image: scrunch4,
            price: 'Rs.280'
          },
          {
            name: 'Scrunchie_05',
            image: scrunch5,
            price: 'Rs.200'
          },
          {
            name: 'Scrunchie_06',
            image: scrunch6,
            price: 'Rs.200'
          },
          {
            name: 'Scrunchie_07',
            image: scrunch7,
            price: 'Rs.250'
          },
          {
            name: 'Scrunchie_08',
            image: scrunch8,
            price: 'Rs.250'
          },
          {
            name: 'Scrunchie_09',
            image: scrunch9,
            price: 'Rs.250'
          },
          {
            name: 'Scrunchie_10',
            image: scrunch10,
            price: 'Rs.240'
          },
          {
            name: 'Scrunchie_11',
            image: scrunch11,
            price: 'Rs.220'
          },
          {
            name: 'Scrunchie_12',
            image: scrunch12,
            price: 'Rs.200'
          }
      
    
    ];
  

  const scrunchies=menueitems.slice(0,12);

      return (<>
        <h1 className='name'>SCRUNCHIES</h1>
        
          <section className="card-container">
            
          {scrunchies.map((item,index)=> (
              
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

export default Scrunchies
