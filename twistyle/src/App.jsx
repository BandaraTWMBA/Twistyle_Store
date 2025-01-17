import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import IconBar from './Components/IconBar/IconBar'
import Info from './Pages/Info/Info'
import Cart from './Pages/Cart/Cart'
import ClawClips from './Pages/ClawClips/ClawClips'
import Earrings from './Pages/Earrings/Earrings'
import Login from './Pages/Login/Login'
import NewArrivals from './Pages/NewArrivals/NewArrivals'
import Sale from './Pages/Sale/Sale'
import Scrunchies from './Pages/Scrunchies/Scrunchies'
import Shop from './Pages/Shop/Shop'  
import Support from './Pages/Support/Support'
import Footer from './Components/Footer/Footer'
import Signup from './Pages/Signup/Signup'
import Products from './Components/Products/Products'
import Order from './Pages/Order/Order'



const App = () => {
  return (
    <>

     {/* <Home/>  */}
     
     <IconBar/>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/clawclips' element={<ClawClips />} />
      <Route path='/earrings' element={<Earrings/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/newarrivals' element={<NewArrivals/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/scrunchies' element={<Scrunchies/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/order' element={<Order/>}/>
      
     </Routes>
    
   
    <Footer/>
     
     
       
    
   </>
  )
}

export default App