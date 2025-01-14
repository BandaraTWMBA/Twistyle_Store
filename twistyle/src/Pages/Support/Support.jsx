import React from 'react'
import './Support.css' 
import supportpic1 from '../../assets/supportpic1.jpg'
import supportpic2 from '../../assets/supportpic2.jpg'
// import supportpic3 from '../../assets/supportpic3.jpg'

const Support = () => {
  return (
    <div className='support'>
      <h1>SUPPORT</h1>
      <div className='support-1'>

       <div className='sup-1'>
        <img src={supportpic1} alt='pic01'/>
        <button className='btn3 '>SEARCH</button>

      </div> 

        <div className='sup-1'>
        <img src={supportpic2} alt='pic02'/>
        <button className='btn3 '>CONTACT</button>

        </div>


        {/* <div className="caption">
            <button className='btn '>SEARCH</button>
            
            </div>

            <div className="caption">
            <button className='btn '>CONTACT</button>
            
            </div>
         */}

      </div>
      <div className='support-2'>
     
      
            <button className='btn '>ASK ME ANYTHING</button>
            
      </div>
      
    </div>
  )
}

export default Support
