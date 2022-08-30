import React from 'react';
import { useState, useEffect } from 'react';
import './Drama.css';

const description = [
  `Her job is to write letters. Her name is Violet Evergarden. Several years have passed since the war, which has deeply wounded many, ended. The world is slowly coming to peace, people are returning to their usual lives. Violet tries to learn to live without the person most important to her and to ignore her feelings. But one day she receives a letter, and a flame of hope flares up in her chest again...`,
  `Mitsuha Miyamizu and Taki Tachibana have never met each other, and yet they are connected by a strange event. One day they switch bodies in their sleep and it is completely unclear how to control this process. This begins to repeat itself more and more often, which will create a lot of problems in the lives of our characters, because waking up every day in someone else's bed in someone else's house is not very pleasant. But what is the reason for such unusual metamorphosis? That is what the main characters will have to figure out.`,
  `Makia was born an unusual girl. The Yolf settlement is famous for the fact that people who come from there cannot grow old; once they reach adolescence, they are frozen in time. It is separated from the rest of the world, but one day the ruler of one state gets the idea that his heir must also be immortal. A tribe is raided in order to steal a girl capable of giving offspring. The future generation must be put down by Leiria, Makia's free-spirited friend, henceforth separated from her beloved. The settlements are ravaged and nearly destroyed, only a few were able to escape, which Macia was able to do.`,
  `Kosei Arima was a virtuoso pianist, as his mentors said. From a young age he played the most complex compositions thanks to his flair, he did everything exactly as prescribed in the notes, even mechanically. Having won quite a few competitions, connoisseurs still said that it was not talent, but discipline and perseverance, and the boy just quickly coped with the strain. Be that as it may, he was recognized as one of the best pianists in his category. When he was 11 years old, his mother, who was his main mentor, died. After that tragedy, the boy never went near the piano again; he stopped feeling the music he was playing. He locks himself away in his world, where there is only room for two old friends, Tsubaki and Ryota.`,
  `The protagonist of our story is very lucky to possess one extraordinary ability. Although Takashi Natsume himself is clearly not happy about such a power, which brings only trouble. The fact is that our guy is able to see various ghosts and spirits, which are not visible to the eye of an ordinary person. Everyone around shuns our hero, and even his parents think that he is a little crazy. They die when the child was only a few years old. Now he has to wander to his relatives in different corners.    `
]

function Drama() {

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

  useEffect(() => {
    if (window.innerWidth < 427) {
      setSize(false)
            let panels = document.querySelectorAll('.panels')
            panels.forEach(item => item.classList.remove('active'))
    }else {
            setSize(true)
          }
  })

  window.addEventListener("resize", function(){
    if (document.documentElement.clientWidth < 427) {
      setSize(false)
      let panels = document.querySelectorAll('.panels')
      panels.forEach(item => item.classList.remove('active'))
    }
    else {
      setSize(true)
    }
});


  return (
    <>
        <h2 className='genre__choose'>Drama</h2>
        <div className='drama'>
            
            <div  data-id= '0'className="panel active" onClick={active}>
              <h3>Violet Evergarden</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[0]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '1'className="panel" onClick={active}>
              <h3>Your Name</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[1]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '2'className="panel" onClick={active}>
              <h3>Maquia: When the Promised Flower Blooms</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[2]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '3'className="panel" onClick={active}>
              <h3>Your Lie in April</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[3]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div data-id= '4' className="panel" onClick={active}>
              <h3>Natsume's Book of Friends</h3>
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

export default Drama;