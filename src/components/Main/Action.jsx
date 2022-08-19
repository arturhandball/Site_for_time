import React from 'react';
import { useState, useEffect } from 'react';
import './Action.css';

const description = [
  `SWORD ART ONLINE is the story of a multiplayer virtual-reality game that takes a deadly turn when players discover they can't escape of their own will but must play to victory or to death. It centers on Kirito (voiced by Bryce Papenbrook), an avid gamer and beta tester for SAO who enters the game on the day of its public launch and is met with the challenge from designer Akihiko Kayaba: Conquer the game's challenges to advance to the 100th floor and defeat the final boss to win your freedom; die in the process, and your real-life persona will perish as well. Loner Kirito sets off to do just that, bolstered by the advance knowledge he gained as a tester, but eventually he teams up with others, including the particularly skilled Asuna (Cherami Leigh). But in an environment where many will die, his edge as a tester (or "beater," as others call them) makes him a target of players who resent him for it.`,
  `On the day of Naruto Uzamaki's birth the village of Konoha was attacked by the 9-tailed fox demon. In order to protect the village Naruto's father the 4th hokage sacrificed his life and sealed the demon in his new born son. 13 years later Naruto graduates the ninja academy and becomes a shinobi with goal to be the hokage of the village. Joining him are rival Sasuke Uchiha who attempts to gain power to avenge his clan after they were murdered by his older brother Itachi. And Sakura Haruno who is Naruto's love interest who of course loves his rival Sasuke. But when itachi returns to the village after the chunnin exams and Sasuke proves to be powerless against him. Sasuke will fall to the villainous Orochimaru to gain power. Naruto must do everything in his power to stop his friend from loosing himself to darkness even if it means losing himself.`,
  `High school student Kurosaki Ichigo is unlike any ordinary kid. Why? Because he can see ghosts. Ever since a young age, he's been able to see spirits from the afterlife. Ichigo's life completely changes one day when he and his two sisters are attacked by an evil, hungry and tormented spirit known as a Hollow. Right in the nick of time, Ichigo and his siblings are aided by a Shinigami (Death God) named Kuchiki Rukia, whose responsibility it is to send good spirits (Pluses) to the afterlife known as Soul Society, and to purify Hollows and send them up to Soul Society. But during the fight against the Hollow, Rukia is injured and must transfer her powers to Ichigo. With this newly acquired power, so begins Kurosaki Ichigo's training and duty as a Shinigami to maintain the balance between the world of the living and the world of the dead...`,
  `The story takes place in Taishō-era Japan, where a secret society, known as the Demon Slayer Corps, has been waging a secret war against demons for centuries. The demons are former humans who were turned into demons by Muzan Kibutsuji injecting them with his own blood, and they feed on humans and possess supernatural abilities such as super strength, powers that demons can obtain called "Blood Demon Art", and regeneration. Demons can only be killed if they are decapitated with weapons crafted from an alloy known as Sun Steel, injected with poison extracted from Wisteria flowers, or exposed to sunlight. The Demon Slayers, on the other hand, are entirely human; however, they employ special breathing techniques, known as "Breathing Styles", which grant them superhuman strength and increased resistance. This helps them fight against demons.`,
  `Naofumi Iwatani, an uncharismatic Otaku who spends his days on games and manga, suddenly finds himself summoned to a parallel universe! He discovers he is one of four heroes equipped with legendary weapons and tasked with saving the world from its prophesied destruction. As the Shield Hero, the weakest of the heroes, all is not as it seems. Naofumi is soon alone, penniless, and betrayed. With no one to turn to, and nowhere to run, he is left with only his shield. Now, Naofumi must rise to become the legendary Shield Hero and save the world!`
]

function Action() {

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
        <h2 className='genre__choose'>Action</h2>
        <div className='wrapper'>
            
            <div  data-id= '0'className="panel active" onClick={active}>
              <h3>Sword Art Online</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[0]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '1'className="panel" onClick={active}>
              <h3>Naruto</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[1]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '2'className="panel" onClick={active}>
              <h3>Bleach</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[2]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '3'className="panel" onClick={active}>
              <h3>Demon Slayer</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[3]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div data-id= '4' className="panel" onClick={active}>
              <h3>Tate no Yuusha no Nariagari</h3>
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

export default Action;