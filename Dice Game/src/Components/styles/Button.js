import styled from "styled-components"

export const Button = styled.button`
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
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    /* hover */
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
        transition:  0.3s background ease-in;
    }
`
;