import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Action from './components/Action';
import Comedy from './components/Comedy';
import Drama from './components/Drama';
import Military from './components/Military';
import Fantasy from './components/Fantasy';
import News from './components/News';
import Music from './components/Music';
import Games from './components/Games';
import Hangman from './components/games/Hangman';
import XO from './components/games/XO';



function App() {
  return (

    <>
      <Router>
            
          <Navbar />
        
          <Routes>
                  <Route path="/" element={<Home />}>
                      <Route path="action" index element={<Action />} />
                      <Route path="comedy" element={<Comedy />} />
                      <Route path="drama" element={<Drama />} />
                      <Route path="military" element={<Military />} />
                      <Route path="fantasy" element={<Fantasy />} />
                  </Route>
          
              <Route path='/games/xo' element={<XO/>} />
              <Route path='/games/hangman' element={<Hangman/>} />
              <Route path='/music' element={<Music/>} />
              <Route path='/games' element={<Games/>} />

              {/* <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} /> */}

        
          </Routes>

          <News />

          <Footer />

      </Router>



    </>
  );
}

export default App;

      
