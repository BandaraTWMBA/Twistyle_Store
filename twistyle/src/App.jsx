import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import IconBar from './Components/IconBar/IconBar'
import Info from './Pages/Info/Info'
import Cart from './Pages/Cart/Cart'
import ClawClips from './Pages/ClawClips/ClawClips'
import Earrings from './Pages/Earrings/Earrings'
import LoginSignup from './Pages/LogonSignup/LoginSignup'
import NewArrivals from './Pages/NewArrivals/NewArrivals'
import Product from './Pages/Product/Product'
import Sale from './Pages/Sale/Sale'
import Scrunchies from './Pages/Scrunchies/Scrunchies'
import Shop from './Pages/Shop/Shop'
import Support from './Pages/Support/Support'



const App = () => {
  return (
    <div>
     {/* <Home/>  */}
     <IconBar/>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path ='Info' element={<Info/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/ClawClips' element={<ClawClips/>}/>
      <Route path='/Earrings' element={<Earrings/>}/>
      <Route path='/LoginSignup' element={<LoginSignup/>}/>
      <Route path='/NewArrivals' element={<NewArrivals/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Sale' element={<Sale/>}/>
      <Route path='/Scrunchies' element={<Scrunchies/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Support' element={<Support/>}/>
      
      
     </Routes>
     {/* <About/> */}
   
    
     
     
       
      
    </div>
  )
}

export default App
