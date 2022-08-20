import React from 'react'
import { useState, useEffect } from 'react'

import './Hangman.css'
import step0 from './imageHangman/step0.jpg'
import step1 from './imageHangman/step1.jpg'
import step2 from './imageHangman/step2.jpg'
import step3 from './imageHangman/step3.jpg'
import step4 from './imageHangman/step4.jpg'
import step5 from './imageHangman/step5.jpg'
import step6 from './imageHangman/step6.jpg'
import step7 from './imageHangman/gameover.webp'
import {quastions} from './Asking.jsx'

export default function Hangman() {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const words = quastions

    const [image, setImage] = useState(step0)
    const [question, setQuestion] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [count, setCount] = useState(0)
    const [dashed, setDashed] = useState([])
    const [game, setGame] = useState(true)
    const [allIndex, setAllIndex] = useState([])

    function random(){
        let indexArray = allIndex
        if (indexArray.length === words.length) indexArray = []
        let index = Math.floor(Math.random() * words.length)
        if (indexArray.includes(index)) {return random()
        } else {
            let ask = question
            let answ = answer
            ask = words[index].ask
            answ = words[index].answer
            indexArray.push(index)
            setQuestion(ask)
            setAnswer(answ)
            setAllIndex(indexArray)
            split(answ)
            }
        

    }

    function split(answer) {
        let word = answer
        let dash = word.split('').map(item => {
            if (item === ' ') return item = ' '
            else return item = ' _ '
        })
        setDashed(dash)
    }

    function click(e){
        let word = answer.toLowerCase()
        let dash = dashed
        let mistake = count
        e.target.disabled = true
        e.target.style.opacity = '0.5'

        if (word.includes(e.target.value)) {
            word.split('').forEach((item, ind) => {
                if (item === e.target.value) {
                    dash[ind] = item
                }
            })
        } else {
           
            mistake ++
            if (mistake === 7) {
                dash = word.split('')
                setDashed([...dash])
                setGame(false)
            }
           
            setCount(mistake)
            picture()
        }

        setDashed([...dash])

        if (word === dash.join('')) setGame(false)
        

    }

    function picture(){
        let step = count;
        switch(step) {
            case 1: setImage(step1)
                    break;
            case 2: setImage(step2)
                break;
            case 3: setImage(step3)
                break;
            case 4: setImage(step4)
                break;
            case 5: setImage(step5)
                break;
            case 6: setImage(step6)
                break;
            case 7: setImage(step7)
            break;
            default: return;
        }
    }

    function reset() {
        setCount(0)
        setImage(step0)
        setGame(true)
        random()
    }

    useEffect(()=>{
        random()
    },[])

    useEffect(()=>{
        picture()
    },[count])


  return (
    <div className='hangman__wrapper'>
        <div className="question">{question}</div>
        <div className="hangman__image">
            <img src={image} alt="#" />
        </div>
        <div className="answer">{dashed.map((item, ind) => {
            if (item === ' ') return <div className='break' key={ind}>{item}</div>
            return <span key={ind}>{item}</span>
        })}</div>
        <div className='letter_wrapper'>
            { (game) ? abc.map((item, ind) => {
                return(
                    <button key={ind} value={item} className='hangman__letter' onClick={click}>{item}</button>
                )
            }) : <button className='reset' onClick={reset}>New Game</button> }
        </div>
    </div>
  )
}
