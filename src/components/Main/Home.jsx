import React from 'react';
import { Link , Outlet } from 'react-router-dom';
import { useRef, useState } from 'react';
import './Home.css';
import News from './News';



function Home() {

  const subBtn = useRef()
  const [emailEr, setEmailEr] = useState(false)

  function click(e) {
    const links = document.querySelectorAll('.genre__link li')
    
    links.forEach(elem => {
      elem.classList.remove('active')
    })

    e.target.classList.add('active')
  }

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
        <div className="promo__container">
            <div className="promo__about">
                <h1>Welcome to Gates</h1>
                <p>Get the latest news on your favourite mangas, anime and manhwa around the world!</p>
                <div className="promo__subscribe">
                    <button  onClick={subscribe}>Subscribe</button>
                    <input ref={subBtn} autocomplete="off" type="text" placeholder= {!emailEr ? 'Enter your Email' : 'Please, check your Email'} name='email_subscribe'/>
                </div>
            </div>
            <div className="promo__img"></div>
            <ul className="promo__genre">
              <Link to='action' className='genre__link' onClick={click}><li>Action</li></Link>
              <Link to='comedy' className='genre__link' onClick={click}><li>Comedy</li></Link>
              <Link to='drama' className='genre__link' onClick={click}><li>Drama</li></Link>
              <Link to='military' className='genre__link' onClick={click}><li>Military</li></Link>
              <Link to='fantasy' className='genre__link' onClick={click}><li>Fantasy</li></Link>
            </ul>
        </div>
        <Outlet />
        <News />
    </>
  );
}

export default Home;