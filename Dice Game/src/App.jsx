import styled from "styled-components";
import StartGame from "./Components/StartGame";
import { useState } from "react";
import Gameplay from "./Components/Gameplay";


const App = () => {

  const [gameStarted, setGameStarted] = useState(false);

  const gotoGamePlay = ()=>{
    setGameStarted((scene)=> !scene)
  };

  return (
    <div>
      {
        gameStarted?<Gameplay/> : <StartGame changeScreen={gotoGamePlay}/>
      }
    </div>
  );
};

export default App;

