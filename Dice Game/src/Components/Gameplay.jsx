import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button,OutlineButton } from "./styles/Button";
import Rules from "./Rules";

const Gameplay = () => {
    const[score,setScore] =useState(0)
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [curSt, setCurSt] =  useState(1);
    const[err, setErr] = useState();
    const [rulesShow, setRulesShow] = useState(false);
   
    const generateRand = (min, max)=> {
        // console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = ()=>{
        if(!selectedNumber) {
            setErr("You Havent Choosen Any Number!");
            
            return;
        }
        setErr("");
        const rand = generateRand(1,7);
        setCurSt(rand);
        
        if(selectedNumber==rand){
            setScore(
                (score)=> score+selectedNumber
            )
        }
        else{
            setScore(
                (score)=> score-1
            )
        }
        setSelectedNumber(null)
    }
    const resetScore = ()=>{
        setScore(0);
    }



    return (

        <GameplayContainer>
            <SubDiv>
                <TotalScore score={score}/>
                <NumberSelector 
                    err={err}
                    selectedNumber={selectedNumber} 
                    setSelectedNumber={setSelectedNumber}
                />
            </SubDiv>
            <RoleDice 
                curSt={curSt} 
                roleDice={roleDice}
            />
            <ButtonContainer>
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={()=>setRulesShow((prev)=>!prev)}>Show rules</Button>
            </ButtonContainer>
            {rulesShow && <Rules/>}
        </GameplayContainer>
    );
};

export default Gameplay;

const GameplayContainer =  styled.div`
    max-width: 1180px;
    margin: 0 auto;
`

const SubDiv = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin:  0 auto;
    width: 200px;
    gap: 10px;
`