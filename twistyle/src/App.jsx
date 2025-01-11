import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import ProductSection from './Components/ProductSection/ProductSection'
import SmallBusiness from './Components/SmallBusiness/SmallBusiness'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
         <ProductSection/>
         
      </div>
      
      <SmallBusiness/>
       
      
    </div>
  )
}

export default App
