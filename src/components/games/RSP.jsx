import React from 'react'
import './RSP.css'
import { useState, useEffect } from 'react'

import rock from './imageRSP/rock.webp'
import sc from './imageRSP/siss.jpg'
import paper from './imageRSP/paper.jpg'
import man from './imageRSP/man.jpg'
import robo from './imageRSP/robo.jpg'

export default function RSP() {
    const [block, setBlock] = useState(false)
    const [winner, setWinner] = useState ('Let play!')
    const [user, setUser] = useState('')
    const [comp, setComp] = useState('')
    const [userImg, setUserImg] = useState(man)
    const [roboImg, setRoboImg] = useState(robo)
    const [game, setGame] = useState(false)

    function choiceUser(e) {
        if(block) return;
        e.target.classList.add('active')
        setBlock(true)
        setUser(e.target.dataset.field)
        setTimeout(()=>{
            choiceComp()
        }, 2000)
    }

    function choiceComp() {
        setBlock(false)
        const field = ['r','s', 'p']
        let random = Math.floor(Math.random() * field.length)
        setComp(field[random])
    }

    function checkWinner() {
        let userCheck = user
        let compCheck = comp
        let check = userCheck + compCheck
        switch(check) {
            case 'rr':
            case 'pp':
            case 'ss':
                setWinner('Dead Heat!')
                break;
            case 'rs':
            case 'pr':
            case 'sp':
                setWinner('You Win!')
                break;
            case 'sr':
            case 'ps':
            case 'rp':
                setWinner('Bot Win!')
                break;
            default:
                return;
        }

        setGame(true)

    }

    function newGame() {
        setBlock(false)
        setWinner('Let play!')
        setUser('')
        setComp('')
        setUserImg(man)
        setRoboImg(robo)
        setGame(false)
        let btns = document.querySelectorAll('.rsp__btn')
        btns.forEach(item => item.classList.remove('active'))

    }

    useEffect(() => {
        if (user !== '' && comp !== ''){
            checkWinner()
        }
    },[user,comp])

    useEffect(()=> {
        switch(user){
            case 'r':
                setUserImg(rock)
                break;
            case 's':
                setUserImg(sc)
                break;
            case 'p':
                setUserImg(paper)
                break;
            default: 
                return;
        }
    }, [user])

    useEffect(()=> {
        switch(comp){
            case 'r':
                setRoboImg(rock)
                break;
            case 's':
                setRoboImg(sc)
                break;
            case 'p':
                setRoboImg(paper)
                break;
            default: 
                return;
        }
    }, [comp])

    useEffect(()=>{
        if(game) {
            setTimeout(()=>{
                newGame()
            }, 2000)
        }
    },[game])



  return (
    <div className='rsp__container'>
        <div className="rsp__winner">{winner}</div>
        <div className="choose__image">
            <div className="player__image">
                <img src={userImg} alt='user' />
            </div>
            <div className="player__image">
                <img src={roboImg} alt='robo' />
            </div>
        </div>
        <div className="rsp__buttons">
            <button className='rsp__btn' data-field='r'onClick={choiceUser}>Rock</button>
            <button className='rsp__btn' data-field='s'onClick={choiceUser}>Scissors</button>
            <button className='rsp__btn' data-field='p'onClick={choiceUser}>Paper</button>
        </div>

    </div>
  )
}
