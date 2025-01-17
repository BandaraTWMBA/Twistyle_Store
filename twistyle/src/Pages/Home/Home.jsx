import React from 'react'
import  Navbar from '../../Components/NavBar/Navbar'
import IconBar from '../../Components/IconBar/IconBar'
import Hero from '../../Components/Hero/Hero'
import ProductSection from '../../Components/ProductSection/ProductSection'
import SmallBusiness from '../../Components/SmallBusiness/SmallBusiness'

import './Home.css'
import cart from '../../assets/shopping-cart1.png'
import scrunch1 from '../../assets/scrunch1.jpg'
import scrunch2 from '../../assets/scrunch2.jpg'
import scrunch3 from '../../assets/scrunch3.jpg'
import scrunch4 from '../../assets/scrunch4.jpg'
import scrunch5 from '../../assets/scrunch5.jpg'
import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.jpg'
import e3 from '../../assets/e3.jpg'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'


const Home = () => {
  
    const menueitems = [
      {
        name: 'Scrunchie_01',
        image: scrunch1,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_02',
        image: scrunch2,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_03',
        image: scrunch3,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_04',
        image: scrunch4,
        price: 'Rs.200'
      },
      {
        name: 'Scrunchie_05',
        image: scrunch5,
        price: 'Rs.200'
      },
       {
            name: 'Earrings_01',
            image: e1,
            price: 'Rs.200'
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
            name: 'ClawClips_01',
            image: c1,
            price: 'Rs.200'
          },
          {
            name: 'ClawClips_02',
            image: c2,
            price: 'Rs.200'
          },
          {
            name: 'ClawClips_03',
            image: c3,
            price: 'Rs.200'
          },
          {
            name: 'ClawClips_04',
            image: c4,
            price: 'Rs.200'
          },
        ];
  

        const bestsellers=menueitems.slice(0,12);
        
       


  return (
    <div>
      <IconBar/>
      <Navbar/>
      
      <Hero/>
      <ProductSection/>
      <SmallBusiness/>
      <h1 className='bestsellers'>BEST SELLERS</h1>
      
      <br/>

        {bestsellers.map((item,index)=> (
              
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
      
   
      
    </div>
  )
}


export default Home