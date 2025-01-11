import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import ProductSection from './Components/ProductSection/ProductSection'
import SmallBusiness from './Components/SmallBusiness/SmallBusiness'
import Title from './Components/Title/Title'
import IconBar from './Components/IconBar/IconBar'

const App = () => {
  return (
    <div>
     <IconBar/>
      <Navbar/>
      <Hero/>
      <div className="container">
         <ProductSection/>
         
      </div>
      
      <SmallBusiness/>
      <br/>
      <br/>
      <Title title="BEST SELLERS"/>
       
      
    </div>
  )
}

export default App
