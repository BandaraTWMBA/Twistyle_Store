import React from 'react'
import  Navbar from '../../Components/NavBar/Navbar'
import IconBar from '../../Components/IconBar/IconBar'
import Hero from '../../Components/Hero/Hero'
import ProductSection from '../../Components/ProductSection/ProductSection'
import SmallBusiness from '../../Components/SmallBusiness/SmallBusiness'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import scrunch1 from '../../assets/scrunch1.jpg'
import cart from '../../assets/shopping-cart1.png'


const Home = () => {
  return (
    <div>
      <IconBar/>
      <Navbar/>
      <Hero/>
      <ProductSection/>
      <SmallBusiness/>
      <h1 className='bestsellers'>BEST SELLERS</h1>
      
      <br/>

      
         <section className="card">
          <img src={scrunch1 } alt="s1" className='card-img '/>
          <div className="card-details">
              <h3 className='card-title'>Scrunchie 01</h3>
              <section className="card-reviews">
                  {/* <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /> */}
                     {/* <span className="total-reviews">4</span> */}
                    <section className="card-price">
                      <div className="price">
                          <del>Rs.300</del><p>Rs.200</p>
                      </div>
                      <div className="bag"><img src={cart} alt="cart"/></div>
                    </section>
              
              </section>
          </div>
          <button className="btnbuy">Buy Now</button>
      
         </section>
      
      

     

       
     <Footer/>
      
    </div>
  )
}

export default Home