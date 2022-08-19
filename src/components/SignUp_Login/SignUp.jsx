import React from 'react'
import './SignUp.css'
import { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const name = useRef()
    const email = useRef()
    const pass = useRef()
    const [nameEr, setNameEr] = useState(false)
    const [emailEr, setEmailEr] = useState(false)
    const [passEr, setPassEr] = useState(false)
    const navi = useNavigate()

    function check() {
        if (name.current.value.length < 4) {
            document.querySelector('.signup__wrapper.name').classList.add('error')
            setNameEr(true)
            name.current.value = null
            setTimeout(() => {
                document.querySelector('.signup__wrapper.name').classList.remove('error')
                setNameEr(false)
            }, 2000);

            return;
        }

        if (!email.current.value.includes('@') ||
            !email.current.value.slice(email.current.value.indexOf('@')).includes('.') ||
            email.current.value.slice(email.current.value.indexOf('@')).length < 4 ) {
                document.querySelector('.signup__wrapper.email').classList.add('error')
                setEmailEr(true)
                email.current.value = null
                setTimeout(() => {
                document.querySelector('.signup__wrapper.email').classList.remove('error')
                setEmailEr(false)
                }, 2000);

            return;
        }
        
        if (pass.current.value.length < 7) {
            document.querySelector('.signup__wrapper.password').classList.add('error')
            setPassEr(true)
            pass.current.value = null
            setTimeout(() => {
                document.querySelector('.signup__wrapper.password').classList.remove('error')
                setPassEr(false)
            }, 2000);

            return;
        }

        submit()
    }

    function submit(){
        document.querySelector('.signup__btn').classList.add('submit')
        setTimeout(() => {
            document.querySelector('.signup__btn').classList.remove('submit')
            name.current.value = null
            email.current.value = null
            pass.current.value = null
            navi('/')
        }, 2000);
    }

  return (
    <div className='signup__container'>
        <div className="signup__wrapper name">
            <span>Name</span>
            <input ref={name} type="text" placeholder={!nameEr ? 'Enter your name' : 'Enter more than 4 characters'} name='name' />
        </div>
        <div className="signup__wrapper email">
            <span>Email</span>
            <input ref={email} type="email" placeholder={!emailEr ? 'Enter your Email' : 'Please, check your Email'} name='email'/>
        </div>
        <div className="signup__wrapper password">
            <span>Password</span>
            <input ref={pass} type="text" placeholder={!passEr ? 'Enter your password' : 'Enter more than 7 characters'} name='password'/>
        </div>
        <button className='signup__btn' onClick={check}>SignUp</button>
    </div>
  )
}
