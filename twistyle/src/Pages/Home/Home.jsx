import React from 'react'
import  Navbar from '../../Components/NavBar/Navbar'
import IconBar from '../../Components/IconBar/IconBar'
import Hero from '../../Components/Hero/Hero'
import ProductSection from '../../Components/ProductSection/ProductSection'
import SmallBusiness from '../../Components/SmallBusiness/SmallBusiness'
import Footer from '../../Components/Footer/Footer'
import './Home.css'


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
      <Footer/>
      

     

       
     
      
    </div>
  )
}

export default Home
