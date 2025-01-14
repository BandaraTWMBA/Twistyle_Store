import './Signup.css'
import React from 'react'
import lock from '../../assets/lock.png'
import user from '../../assets/user.png'
import envelope from '../../assets/envelope.png'

function Signup() {
    return (
        <div className='signup-first'>
            
            <div className='signup-box'>
                
                <form>
                    <h2>Sign Up</h2>
                    <div className='input-box'>
                        <img className='icon' src={envelope}alt="email icon" />
                        <input type="text" required />
                        <label className='email1'>E-mail</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src={user}alt="username icon" />
                        <input type="text" required />
                        <label className='username'>Username</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src={lock} alt="password icon" />
                        <input type="password" required />
                        <label className='password'>Password</label>
                    </div>

                    
                    <div className='input-box'>
                        <img className='icon' src={lock} alt="email icon" />
                        <input type="password" required />
                        <label className='password'>New Pin</label>
                    </div>
                    <div className='input-box'>
                        <img className='icon' src={lock}alt="email icon" />
                        <input type="password" required />
                        <label className='password'>Confirm Pin</label>
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember me</label>
                        {/* <a href='#'> Forgot Password?</a> */}
                    </div>
                    <button type='submit'>SignUp</button>
                    <div className='register-link'>
                        <p>Already have an account? <a href='/login'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup