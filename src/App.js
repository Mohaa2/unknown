import './App.css';
import {useState, useEffect} from 'react'
import Header from './Header';
import Game from './Game';

function App() {
  const [lives, setLives] = useState(5)
  const [score, setScore] = useState(0)



  return (
    <div className="App">
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
