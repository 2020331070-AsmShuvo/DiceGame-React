import styled from "styled-components";
import { Button } from "./styles/Button";
const StartGame = ({change}) => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png"/>
            </div>
            <div>
                <h1>Dice Game</h1>
                <Button onClick={change}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    height: 97vh;
    display: flex;
    align-items: center;

    h1{
        font-size: 96px;
        white-space: nowrap;
        color: #1b0d0d98;
    }

`;
