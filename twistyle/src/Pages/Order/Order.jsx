import React from 'react'
import './Order.css'

const Order = () => {
  return (
   <div className='order-details'>
               
               <div className='order-box'>
                   
                   <form>
                       <h2>ORDER NOW</h2>
                       <div className='input-box'>
                        
                           <input type="text" required />
                           <label className='email1'>E-mail</label>
                       </div>
                     
                       <div className='input-box'>
                          
                           <input type="text" required />
                           <label className='contact-number'>Contact No.</label>
                       </div>
                      
                       <div className='input-box'>
                           
                           <input type="text" required />
                           <label className='number'>Count</label>
                       </div>
   
                       
                       <div className='input-box'>
                           
                           <input type="text" required />
                           <label className='adress'>Adress</label>
                       </div>
                       
                       <div className='remember-forgot'>
                           <label><input type='checkbox' />Above details are correct</label>
                           {/* <a href='#'> Forgot Password?</a> */}
                       </div>
                       <button type='submit'>Order Now</button>
                       {/* <div className='register-link'>
                           <p>Already have an account? <a href='/login'>Login</a></p>
                       </div> */}
                   </form>
               </div>
           </div>
  )
}

export default Order
