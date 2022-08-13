import React from 'react';
import { Link } from 'react-router-dom';
import hangman from './games/imagelink/hangman.jpg'
import xo from './games/imagelink/xo.jpg'
import './Games.css'

function Games() {

  return (
    <>

      <div className="games__container">
        <div className="games__link">
            <Link to="/games/hangman"><img className='games__image' src={hangman} alt="hangman" /></Link>
        </div>
        <div className="games__link">
        <Link to="/games/xo"><img className='games__image' src={xo} alt="XO" /></Link>
        </div>
      </div>

    </>
  );
}

export default Games;

