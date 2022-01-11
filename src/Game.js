import {useState,useEffect,useRef} from 'react'

const Game = ({lives,setLives,score,setScore}) => {
  const [colors, setColors] = useState([
    {id:'#E83845', color: "#E83845"},
    {id:'#FFCE30', color: "#FFCE30"},
    {id:'#122CE7', color: "#122CE7"},
  ])
  let photos = ['1.jpg','8.jpg']
  let test = useRef()
  const [currColor , setCurrColor] = useState(colors[Math.floor(Math.random() * colors.length)].id)
  
  let [currPhoto, setCurrPhoto] = useState(photos[0])
  
  let [BtnState, setBtnState] = useState('block')
  

  let interv = null
  useEffect(() => {
    if(BtnState !== 'block'){
      interv = setInterval(() => {
        if(parseInt(test.current.style.width) >= 100){
          gameOver()
          test.current.style.width = '0%'
        }else{
          if(lives){
            test.current.style.width = `${parseInt(test.current.style.width) + 1}%`
          }
        }
      },15);
    }
    
    return ()=>{
      clearInterval(interv)
    }
  }, [lives, BtnState])
  
  const Daudio = new Audio('/sounds/done.mp3')

  function CheckCorrect(id){
    
    if(BtnState === 'none'){
      if(id === currColor && parseInt(test.current.style.width) < 100){
        setScore(prev => prev+10)
        setCurrColor(colors[Math.floor(Math.random() * colors.length)].id) 
        Daudio.pause()
        Daudio.play()
      }else{
        gameOver()
      }
      test.current.style.width = '0%'
    }
  }
  // useEffect(() => {
  //   if(score <= 100) setCurrPhoto(photos[0])
  //   // if(score <= 200 && score > 100) setCurrPhoto(photos[1])
  //   // if(score <= 300 && score > 200) setCurrPhoto(photos[2])
  //   // if(score <= 400 && score > 300) setCurrPhoto(photos[3])
  //   // if(score <= 500 && score > 400) setCurrPhoto(photos[4])
  //   // if(score <= 600 && score > 500) setCurrPhoto(photos[5])
  //   // if(score <= 700 && score > 600) setCurrPhoto(photos[6])
  //   // if( score >= 700) gameOver()
  // }, [score])
  
  // GAME OVER FUNCTION
  const Faudio = new Audio('/sounds/buzz.wav')
  function gameOver(){
    if(lives <= 1){
      clearInterval(interv)
      setBtnState('block')
      setLives(0)
      setCurrPhoto(photos[1])
    }else{
      setLives(prev => prev - 1)
    }
    Faudio.pause()
    Faudio.play()
  }

  
  function playAgain(){
    setScore(0)
    setBtnState('none')
    setCurrPhoto(photos[0])
    setLives(5)
  }

  return (
    <main>
      {/* PROGRESS BAR */}
      <div className="progParent" style={{border: `1px solid ${currColor}`}}>
        <div className="progIn" ref={test} style={{background: currColor, width: "0%"}}></div>
      </div>

      {/* COLORS SELECTION  */}
      <div className="colors">
        {colors.map((C,index) => {
          return <div 
            key={index}  
            onClick={()=> CheckCorrect(C.id)}
            // TOUCH EVENT FOR MOBILE
            
            onTouchStart={(e)=> { e.target.style.boxShadow = `inset 0px 0px 10px ${C.color} ,1px 1px 15px ${C.color}` }}
            onTouchEnd={(e)=>{e.target.style.boxShadow = ''}}
            // CLICK EVENT FOR DESKTOP
            onMouseDown={(e)=> {e.target.style.boxShadow = `inset 0px 0px 10px ${C.color} ,1px 1px 15px ${C.color}` }}
            onMouseUp={(e)=>{e.target.style.boxShadow = ''}}
            style={{background: `${C.color}`}} 
            className={`btn btn${index}`
        }>
      </div>
        })}
      </div>
      <div onClick={playAgain} style={{display: BtnState }}  className='playBtn'>متلعبش تاني!</div>
      {/* PHOTOS */}
      <div className="photos">
        <img src={`/images/${currPhoto}`} alt="funny" />
      </div>

    </main>
  )
}

export default Game
