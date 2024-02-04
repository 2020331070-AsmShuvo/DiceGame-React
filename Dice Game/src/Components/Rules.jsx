import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play the dice game</h2>
            <div className="text">
                <p>Select any number </p>
                <p>Click on dice image</p>
                <p>After clicking the dice if it is matched to your selected number then you will get equial point of the selected number </p>
                <p>else you will get -1 each time</p>
            </div>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer = styled.div`
    background-color: #ae99995c;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    line-height: 20px;

    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`