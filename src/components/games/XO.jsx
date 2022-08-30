import React from 'react'
import './XO.css'
import { useState, useEffect } from 'react'
import {Winner} from './Winner'

function XO() {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xNext, setXNext] = useState(true)
    const [count, setCount] = useState(0)
    const [allIndex, setAllIndex] = useState([])

    const winner = Winner(board)

    function handleClick(e) {
        if (!xNext) return
        let a = +(e.target.value)
        let newInd = allIndex
        newInd.push(a)
        const boardGame = board
        let countPlayer = count
        countPlayer++
        if (winner || boardGame[a]) return 

        boardGame[a] = 'X' 

    
     
        setCount(countPlayer)
        setBoard([...boardGame])
        setXNext(!xNext)
        setAllIndex(newInd)

        console.log(boardGame)
        console.log(allIndex)
        
    }

    useEffect(()=>{
        if(xNext===true) return
        if(allIndex.length === 9) return
        if(xNext===false) setTimeout(botHand, 1000) 
    }, [xNext])

    function botHand(){
        const boardGame = board
        let botInd = allIndex
        let botIndex = Math.floor(Math.random() * 8)
        console.log(botIndex + ' botindex')
        if (botInd.includes(botIndex)) {return botHand()}
        else {
        if (botInd.length >= 9) return
        botInd.push(botIndex)
        let countPlayer = count
        countPlayer++
        if (winner || boardGame[botIndex]) return 

        boardGame[botIndex] = 'O' 
        console.log(boardGame)
     
        setCount(countPlayer)
        setBoard([...boardGame])
        setXNext(!xNext)
        setAllIndex(botInd)

        console.log(boardGame)
        console.log(allIndex)
        }
    }

    function newGame() {
        setBoard(Array(9).fill(null))
        setCount(0)
        setXNext(true)
        setAllIndex([])
    }

    function check(){
        if (winner === null && count===9) {
            return <span>Ничья</span>
        } else {
            return <span>{winner ? 'The winner ' + ((winner === 'X') ? 'Player' : 'Bot') : 'Now walking: ' + (xNext ? 'Player' : 'Bot')}</span>
        }
    }
  
    return (
      <div className='game__wrapper'>
        <button className='restart' onClick={newGame}>New Game</button>
        <div className='game__board'>
            {board.map((item, ind) => {
                return (
    
                            <button key={ind} className="square" value={ind} onClick={handleClick}>{item}</button>
                        
                      )
            })}
        </div>
        <div className="player">
            {check()}
        </div>
      </div>
    )
  
}

export default XO