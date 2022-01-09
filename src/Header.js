import React from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
const Header = ({lives,setLives ,score,setScore}) => {
  return (
    <header>
      <div className='lives'>
        <div>{[...Array(lives)].map((x,index)=>{
          return <AiFillHeart color='red' size='22px' key={index}/>
        })}
        { [...Array(5-lives)].map((x,index)=>{
          return <AiOutlineHeart color='red' size='22px' key={index}/>
        })}
        </div>
      </div>
      <div className='score'>
        {score}
      </div>
    </header>
  )
}

export default Header
