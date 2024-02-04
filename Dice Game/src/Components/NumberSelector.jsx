import styled from "styled-components";

const NumberSelector = ({err,selectedNumber, setSelectedNumber}) => {

    const nums = [1,2,3,4,5,6];
    
    console.log(selectedNumber);
    return (
        <NumberSelectorContainer>
            <p className="error">{err}</p>
            <BoxContainer>
                {
                    nums.map((val, i)=>(
                        <Box isSelected={val==selectedNumber} 
                        key={i} 
                        onClick={()=>{setSelectedNumber(val)}}>
                            {val}
                        </Box>
                    ))   
                }
            </BoxContainer>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const Box = styled.div`
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: grid;
    text-align: center;
    place-items: center;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>props.isSelected?"white":"black"};
`
const BoxContainer = styled.div`
    display: flex;
`
const NumberSelectorContainer = styled.div`
    .error{
        color: red;
        font-weight: 800;
    }
`