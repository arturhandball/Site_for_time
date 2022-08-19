import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './components/Main/Home';
import Footer from './components/Footer/Footer';
import Action from './components/Main/Action';
import Comedy from './components/Main/Comedy';
import Drama from './components/Main/Drama';
import Military from './components/Main/Military';
import Fantasy from './components/Main/Fantasy';
import Music from './components/Main/Music';
import Games from './components/Main/Games';
import Hangman from './components/games/Hangman';
import XO from './components/games/XO';
import RSP from './components/games/RSP';
import SignUp from './components/SignUp_Login/SignUp';
import Login from './components/SignUp_Login/Login';



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
              <Route path='/games/rsp' element={<RSP/>} />
              <Route path='/music' element={<Music/>} />
              <Route path='/games' element={<Games/>} />

              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />

        
          </Routes>



          <Footer />

      </Router>



    </>
  );
}

export default App;

      
