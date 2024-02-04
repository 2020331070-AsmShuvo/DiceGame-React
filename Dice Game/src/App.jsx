import StartGame from "./Components/StartGame";
import Gameplay from "./Components/Gameplay";
import { useState } from "react";


const App = () => {

  const [isGameStarted, setisGameStarted] = useState(true);

  const startGamePlay = ()=>{
    setisGameStarted((scene)=>!scene);
  };

  return (
    <div>
      {
        isGameStarted ? <Gameplay/> : <StartGame change={startGamePlay}/>
      }
    </div>
  );
};

export default App;

