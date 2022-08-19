import React from 'react';
import { Link } from 'react-router-dom';
import hangman from '../games/imagelink/hangman.jpg'
import xo from '../games/imagelink/xo.jpg'
import rsp from '../games/imagelink/rsp.jpg'

import './Games.css'

function Games() {

  return (
    <>
      <h2 className='genre__choose'>Games For You</h2>
      <div className="games__container">

        <div className="games__link">
            <Link to="/games/hangman"><img className='games__image' src={hangman} alt="hangman" /></Link>
        </div>
        <div className="games__link">
        <Link to="/games/xo"><img className='games__image' src={xo} alt="XO" /></Link>
        </div>
        <div className="games__link">
        <Link to="/games/rsp"><img className='games__image' src={rsp} alt="XO" /></Link>
        </div>
      </div>

    </>
  );
}

export default Games;

