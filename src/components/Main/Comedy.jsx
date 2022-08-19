import React from 'react';
import { useState, useEffect } from 'react';
import './Comedy.css';

const description = [
  `Eikichi Onizuka ("22 years old, single," as he likes to introduce himself), a real terror on two wheels, a member of the motorcycle gang that terrifies the townspeople, decides to retrain as... a school teacher. After all, in any school full-packed mouth-watering high school girls in short skirts! But the more he tries on an unusual role bully plunges into the twists and turns of general education, the more he tries to twist the place of work in his own way - gaining one victory after another over the reigning of the school stiffness, hypocrisy, show-offs and indifference.`,
  `A terrible threat hangs over the world! Spy "Twilight" has to perform the most difficult mission in his career ... to become a model family man. Under the guise of a loving husband and father, he must infiltrate an elite school and get close to the top of the political world. At first glance, the cover is perfect, except that his wife is a hired killer. And the spouses do not know about each other's real work... Only their adopted daughter, a telepath, knows about it!`,
  `The storyline decides to show viewers an interesting story about bright sunshine, a warm beach, mesmerizing scenery and, of course, the company of cheerful buddies who are not afraid to dive into the water and trust their own lives to it. Of course, diving cannot be learned in a minute. To become a true professional, you need to train long and hard, and also not be afraid of the depth. If there is no inner strength and great desire - you can safely cross yourself off the list of experienced professionals.`,
  `Leadership in adolescence is of the utmost importance. It gives confidence and peer respect. Guys who are distinguished by outstanding intellect, to get an attractive title is quite easy. But being a kind of genius does not guarantee that all benefits will instantly fall at the feet of a teenager. At the famous Academy of Shuichi, which belongs to the prestigious institutions, there are quite capable guys and girls. Almost everyone here is endowed with a unique gift. Although even in the "brilliant" company can find a truly unreachable individual.`,
  `Hundreds of years ago, the Chinese spirits of the Zodiac and their god vowed to stay together forever. United by this promise, the possessed members of the Soma family must always and under all circumstances return to each other. However, when this bond shackles their freedom, it becomes an unwelcome burden-a curse. As head of the clan, Akito is convinced that he has a special bond with the other Soma. While he desperately clings to this fantasy, the rest of the family remains isolated and depressed for fear of punishment.`
]

function Comedy() {
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
    }
    else {
      setSize(true)
    }
});


  return (
    <>
        <h2 className='genre__choose'>Comedy</h2>
        <div className='comedy'>
            
            <div  data-id= '0'className="panel active" onClick={active}>
              <h3>Great Teacher Onizuka</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[0]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '1'className="panel" onClick={active}>
              <h3>Spy x Family</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[1]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '2'className="panel" onClick={active}>
              <h3>Grand Blue</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[2]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '3'className="panel" onClick={active}>
              <h3>Kaguya-sama: Love is War</h3>
            </div>
             {size ? null : (
                <div className="description">
                <p>{description[3]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div data-id= '4' className="panel" onClick={active}>
              <h3>Fruits Basket: The Final</h3>
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

export default Comedy;