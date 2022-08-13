import React from 'react'
import './Music.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import first from './audio/1.mp3'
import second from './audio/2.mp3'
import third from './audio/3.mp3'
import four from './audio/4.mp3'
import five from './audio/5.mp3'
import six from './audio/6.mp3'
import seven from './audio/7.mp3'
import eight from './audio/8.mp3'
import nine from './audio/9.mp3'

function Music() {

    function mute(e) {
        const audio = document.querySelectorAll('audio')
        audio.forEach(item => {
            
            if (item.src !== e.target.src) item.pause()
        })

    }

    return (
      <>
        <h2 className='genre__choose'>Top Music</h2>
        <div className="music__wrapper">
            
            <div className="music__card" >
        <AudioPlayer
            autoPlay={false}
            src={first}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={second}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={third}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={four}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={five}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={six}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={seven}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={eight}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            <div className="music__card">
        <AudioPlayer
            autoPlay={false}
            src={nine}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
            onPlay={mute}
            showDownloadProgress={false}
        />
            </div>
            
        </div>
         
      </>
    );
  }
  
  export default Music;
  