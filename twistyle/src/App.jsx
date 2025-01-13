import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import IconBar from './Components/IconBar/IconBar'
import Info from './Pages/Info/Info'



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
     </Routes>
     {/* <About/> */}
   
    
     
     
       
      
    </div>
  )
}

export default App
