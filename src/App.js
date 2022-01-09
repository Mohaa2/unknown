import './App.css';
import {useState, useEffect} from 'react'
import Header from './Header';
import Game from './Game';
import Intro from './Intro';

function App() {
  const [lives, setLives] = useState(5)
  const [score, setScore] = useState(0)



  return (
    <div className="App">
      <Intro />
      <Header 
        lives={lives} 
        setLives={setLives} 
        score={score}
        setScore={setScore}
      />
      <Game 
        lives={lives}
        setLives={setLives}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
