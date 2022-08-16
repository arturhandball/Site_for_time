import React from 'react';
import { Link , Outlet } from 'react-router-dom';
import './Home.css';
import News from './News';

function Home() {

  function click(e) {
    const links = document.querySelectorAll('.genre__link li')
    
    links.forEach(elem => {
      elem.classList.remove('active')
    })

    e.target.classList.add('active')
  }


  return (
    <>
        <div className="promo__container">
            <div className="promo__about">
                <h1>Welcome to Gates</h1>
                <p>Get the latest news on your favourite mangas, anime and manhwa around the world!</p>
                <div className="promo__subscribe">
                    <button>Subscribe</button>
                    <input type="text" placeholder='Enter your Email' name='email_subscribe'/>
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