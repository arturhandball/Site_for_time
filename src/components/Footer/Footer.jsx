import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import './Footer.css';

function Footer() {

    const subBtn = useRef()
    const [emailEr, setEmailEr] = useState(false)

    function subscribe() {
        console.log(subBtn)
        if (!subBtn.current.value.includes('@') ||
        !subBtn.current.value.slice(subBtn.current.value.indexOf('@')).includes('.') ||
        subBtn.current.value.slice(subBtn.current.value.indexOf('@')).length < 4 ) {
            document.querySelector('.promo__subscribe').classList.add('error')
            setEmailEr(true)
            subBtn.current.value = null
            setTimeout(() => {
            document.querySelector('.promo__subscribe').classList.remove('error')
            setEmailEr(false)
            }, 2000);
    
            return;
        }
    
        subBtn.current.value = 'You are subscribed to us'
        subBtn.current.disabled = true
    
      }


  return (
    <>
       <footer className="footer">
            <div className="footer__container">
                <div className="footer__about">
                    <Link to='/' className='footer-logo'>
                        <img src='images/footer.png' alt="logo"  />
                    </Link>

                    <p>Gates is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture.</p>
                </div>
                <div className="footer__subscribe">
                    <button onClick={subscribe}>Subscribe</button>
                    <input ref={subBtn} type="text" placeholder={!emailEr ? 'Enter your Email' : 'Please, check your Email'} name='email_subscribe'/>
                </div>
            </div>
            <div className="footer__copy">
                @copyright 2021 Gates
            </div>
       </footer>
    </>
  );
}

export default Footer;

