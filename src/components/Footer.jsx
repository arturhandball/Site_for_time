import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {


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
                    <button>Subscribe</button>
                    <input type="text" placeholder='Enter your Email' name='email_subscribe'/>
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

