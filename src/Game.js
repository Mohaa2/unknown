import {useState,useEffect,useRef} from 'react'

const Game = ({lives,setLives,score,setScore}) => {
  const [colors, setColors] = useState([
    {id:'#E83845', color: "#E83845"},
    {id:'#FFCE30', color: "#FFCE30"},
    {id:'#122CE7', color: "#122CE7"},
  ])
  let photos = ['1.webp','2.webp','3.webp','4.webp','5.gif','6.gif','7.gif','8.jpg']
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
          console.log(lives)
        }else{
          if(lives){
            test.current.style.width = `${parseInt(test.current.style.width) + 1}%`
          }
        }
      },12);
    }

    return ()=>{
      clearInterval(interv)
    }
  }, [lives, BtnState])
  console.log('render')


  function CheckCorrect(id){
    
    if(BtnState === 'none'){
      if(id === currColor){
        setScore(prev => prev+10)
        setCurrColor(colors[Math.floor(Math.random() * colors.length)].id) 
      }else{
        gameOver()
      }
      test.current.style.width = '0%'
    }
  }
  useEffect(() => {
    if(score <= 100) setCurrPhoto(photos[0])
    if(score <= 200 && score > 100) setCurrPhoto(photos[1])
    if(score <= 300 && score > 200) setCurrPhoto(photos[2])
    if(score <= 400 && score > 300) setCurrPhoto(photos[3])
    if(score <= 500 && score > 400) setCurrPhoto(photos[4])
    if(score <= 600 && score > 500) setCurrPhoto(photos[5])
    if(score <= 700 && score > 600) setCurrPhoto(photos[6])
    if( score >= 700) gameOver()
  }, [score])

  // GAME OVER FUNCTION
  function gameOver(){
    if(lives <= 1){
      clearInterval(interv)
      setBtnState('block')
      setLives(0)
      setCurrPhoto(photos[7])
    }else{
      setLives(prev => prev - 1)
    }
  }

  
  function playAgain(){
    setScore(0)
    setBtnState('none')
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
        {colors.map((C,index)=>{
          return <div key={index}  onClick={()=> CheckCorrect(C.id)}  style={{background: `${C.color}`}} className={`btn btn${index}`}></div>
        })}
      </div>
      <button onClick={playAgain} style={{display: BtnState}} className='playBtn'>دوسة زرار هتخسرك كتير (عميقة سيكا)</button>
      {/* PHOTOS */}
      <div className="photos">
        <img src={`/images/${currPhoto}`} alt="funny" />
      </div>

    </main>
  )
}

export default Game
