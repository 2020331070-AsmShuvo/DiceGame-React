import styled from "styled-components";
const StartGame = () => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png"/>
            </div>
            <div>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
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
        margin-bottom: 0px;
    }

`;
const Button = styled.button`
    background-color: black;
    color: white;
    border: 1px solid transparent;
    padding: 10px;
    font-size: 16px;
    min-width: 200px;
    transition:  0.3s background ease-in;

    /* hover */
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition:  0.3s background ease-in;
    }
`