import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login__container'>
    <div className="login__wrapper email">
        <span>Email</span>
        <input  type="email" placeholder='Enter your Email' name='email'/>
    </div>
    <div className="login__wrapper password">
        <span>Password</span>
        <input  type="text" placeholder='Enter your password' name='password'/>
    </div>
    <button className='login__btn' >Login</button>
</div>
  )
}
