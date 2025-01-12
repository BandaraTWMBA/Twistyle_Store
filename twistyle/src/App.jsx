import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import ProductSection from './Components/ProductSection/ProductSection'
import SmallBusiness from './Components/SmallBusiness/SmallBusiness'
import Title from './Components/Title/Title'
import IconBar from './Components/IconBar/IconBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
  
  
      <div>
      <BrowserRouter>
      <Navbar />
      <IconBar />
      <Hero />
       <Routes>
        <Route path='/' element={<Home/>}></Route>
       </Routes>
      
       
         
        
        <div className="container">
          <ProductSection />
        </div>
        <SmallBusiness />
        <br />
        <br />
        <Title title="BEST SELLERS" />
        
        </BrowserRouter>
      </div>
    
    
  )
}

export default App
