import React from 'react';
import { useState, useEffect } from 'react';
import './Fantasy.css';

const description = [
  `The fascinating game called "Iggdrasil", which allows participants to fully immerse themselves in the game reality, has become a real hit. It was able to give many users a lot of unforgettable impressions. There comes a day when the developers are about to announce the server shutdown, but within the game remained loyal users, among whom is Momonga - the strongest gamer, who managed to reach the maximum level and a true master, who became the owner of the Great Tomb of Nazarek, which has survived many battles.`,
  `In Ginjie, a spatial gate suddenly opened, and crowds of enemies rushed to take over the world. But to Japan's great joy, the forces of Japan managed to repel the enemy attack. It turns out that they are truly strong and powerful warriors, and were not willing to give up so easily. Well aware that the attacks will not stop, they decided to build their own garrison. The protagonist becomes a thirty-three-year-old man named Yoji Itami.`,
  `Fifteen-year-old Chise Hatori lives a completely boring life. The main character is a real loser and has to do everything possible to avoid getting into various troubles. Her fate is full of all sorts of missteps and it is absolutely impossible to achieve positive results concerning her affairs. Her mother realized that her daughter is in real trouble, and being unable to tolerate such antics anymore, decided to just commit suicide. Information about what happened made Chise madly sorry and she does not understand how to fix her own life. But it happens that her owner decides to sell her at an auction for a pittance to a man named Elias Ainsworth.`,
  `Kurata is a 28-year-old otaku who has a passion for mecha-anime and works in a publishing house. He lived a fairly ordinary life, until one evening he was hit by a car on his way home... But his life did not stop there. The man's soul was reborn in another world - in the body of a child named Ernesti Ekewalker, while retaining the memories of his past life. In this world, Eru's homeland is protected by knights who control giant robots known as Silhouettes. Dreaming of piloting these robots, Eru, along with his childhood friends, his brother and sister, Archid and Adeltrude Olter, aspire to become pilots of the Silhouettes.`,
  `One day a gamer fell asleep while playing a game, and woke up in another world in the guise of a skeleton! The skeleton knight Ark, clad in beautiful armor and armed with a mighty sword and magic, must find his way in this new world for him.`
]

function Fantasy() {


  const [text, setText] = useState('')
  const [size, setSize] = useState(true)



  function active(e) {
    const panels = document.querySelectorAll('.panel')
    
    panels.forEach(elem => {
      elem.classList.remove('active')
    })

    e.target.classList.add('active')

    let id = e.target.dataset.id
    let textId = description[id]
    setText(textId)

  }

  useEffect(()=>{
    let textId = description[0]
    setText(textId)
  },[])

  window.addEventListener("resize", function(){
    if (document.documentElement.clientWidth < 427) {
      setSize(false)
      let panels = document.querySelectorAll('.panels')
      panels.forEach(item => item.classList.remove('active'))
      console.log(panels)
    }
    else {
      setSize(true)
    }
});


  return (
    <>
        <h2 className='genre__choose'>Fantasy</h2>
        <div className='fantasy'>
            
            <div  data-id= '0'className="panel active" onClick={active}>
              <h3>Overlord</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[0]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '1'className="panel" onClick={active}>
              <h3>GATE</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[1]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '2'className="panel" onClick={active}>
              <h3>The Magician's Bride</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[2]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '3'className="panel" onClick={active}>
              <h3>Knight's and Magic</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[3]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div data-id= '4' className="panel" onClick={active}>
              <h3>Skeleton Knight</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[4]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
        </div>
        {!size ? null : (
                <div className="description">
                <p>{text}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
    </>
  );
}

export default Fantasy;