import React from 'react'
import  Navbar from '../../Components/NavBar/Navbar'
import IconBar from '../../Components/IconBar/IconBar'
import Hero from '../../Components/Hero/Hero'
import ProductSection from '../../Components/ProductSection/ProductSection'
import SmallBusiness from '../../Components/SmallBusiness/SmallBusiness'

import './Home.css'
import BestSellers from '../../Components/BestSellers/BestSellers'



const Home = () => {
 

  return (
    <div>
      
      
      <Hero/>
      <ProductSection/>
      <SmallBusiness/>
      <BestSellers/>
      
       </div>
   
      
    
  )
}


export default Home