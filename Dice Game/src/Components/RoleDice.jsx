
import styled from "styled-components";

const RoleDice = ({curSt, roleDice}) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice/dice_${curSt}.png`} alt="" />
            </div>
            <p>Click to role the dice</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p{
        color: gray;
    }
`