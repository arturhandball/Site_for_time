import React from 'react';
import { useState, useEffect } from 'react';
import './Military.css';


const description = [
  `In the last century mankind suffered because of the invasion of giants. They were very similar in appearance to ordinary humans, but also had several differences. The difference was the overly large size of the creatures and their utter stupidity. The giants acted like the zombies in commonplace horror movies. They could not boast of intelligence and were completely consistent with their primal instinct for survival. Therefore, these creatures relentlessly devoured the defenseless population, with absolutely no sense of regret. Under the onslaught of the prevailing madness, the inhabitants of the planet gradually began to die out. Those lucky enough to be alive decided to unite and begin to defend themselves.`,
  `The Elric brothers desperately wanted to resurrect their dead mother, so they risked disregarding the unshakable rule of Alchemy concerning human rebirth. The moment the forbidden ritual was performed, events began to unfold in an unplanned scenario. As a result, the ending was completely unpredictable. Alphonse lost his flesh entirely, and his soul became a prisoner of iron armor. Edward also paid the price for his deeds and lost an arm and a leg. Now the boy is forced to use auto-armor, a special steel armor. Gradually the gifted Edward became a state alchemist, becoming a worthy representative of his state's powerful military machine. But despite the grandiose achievements, the character was not happy, as he tirelessly tried to make his younger brother regain his former image, and to him his body parts. Service in the powerful system of the country gives the relatives great privileges, as well as unlimited access to any information. Soon the heroes learn of the powerful stone and set out in search of it. They have no idea what trials lie ahead.`,
  `This anime will tell the story of young Lelouch, who is the heir to the emperor's throne. Because of a difficult war, he lost his entire family, becoming an orphan. The narrative begins when Britain takes over a third of the world, Lelouch's homeland, Japan, becomes a small country nicknamed "Area 13". The boy, on his parents' grave, makes a promise that he will avenge their deaths. One day, during one of the fights, the protagonist meets a not quite ordinary girl, who appears to be S.S., she offers him a gift called "Gias" - the ability to subdue the will of others, just appropriate to his lineage. And he decides to join the resistance. Now he will have to lead a double life - a student at his academy and a mysterious masked fighter in the war. Though it will not be given to him easily, because his best friend, who has always supported, guided him on the right path, goes to the opposite side.`,
  `The inhabitants of Earth have always lacked a planet of their own, and they have desperately sought to explore outer space as much as possible. Over time, civilization in distant space evolved so much that humans were able to establish two interstellar states. Of course, the two competing powers could not coexist peacefully. They constantly feuded and could not find a compromise. The terrible war dragged on for a century and a half. Autocracy reigned in the Galactic Empire, leading to disintegration in the aristocratic ranks. And in the democratic Alliance of Free Planets, a sudden change came, resulting in a rapidly expanding local oligarchy.`,
  `Pain, blood and tears. A new ruler ascends to the throne. His servants, the demons under them, commit atrocities in the city with impunity. Everything changes when a heavy warrior enters the city, hidden by the darkness of night. With a variety of weapons for the most unforeseen moments, wearing armor, his body all covered in scars - the black swordsman. His sword is so huge that it can match his fierce anger toward the king and the demons. This story is essentially a war drama. Taking place in the Middle Ages, it involves horror mixed with fantasy. At the center of the action is Gats, his destiny. Formerly a mercenary, he now hunts demons. His path is determined from above. Betrayal, loyalty, magic, dark creatures and elves.`
]

function Military() {


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
        <h2 className='genre__choose'>Military</h2>
        <div className='military'>
            
            <div  data-id= '0'className="panel active" onClick={active}>
              <h3>Attack on Titan</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[0]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '1'className="panel" onClick={active}>
              <h3>Fullmetal Alchemist</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[1]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '2'className="panel" onClick={active}>
              <h3>Lelouch of the Rebellion</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[2]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div  data-id= '3'className="panel" onClick={active}>
              <h3>The Legend of the Galactic Heroes</h3>
            </div>
            {size ? null : (
                <div className="description">
                <p>{description[3]}</p>
                <a className='description__link' href="https://animego.org/">Click to see</a>
            </div>
              )}
            <div data-id= '4' className="panel" onClick={active}>
              <h3>Berserk</h3>
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

export default Military;