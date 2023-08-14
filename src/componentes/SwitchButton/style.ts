import { styled } from "styled-components";

export const StyledButtonDiv = styled.div`
    background-color: #F5F5F5;
    border: 1px solid #E0E0E0;
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    width: 10rem;
    padding: 0.2rem;
`
type propsTypes = {
    select: boolean
    color: string
}

export const StyledButton = styled.button<{data: propsTypes}>`
    background-color: ${props => !props.data.select === true ? "transparent" : props.data.color};
    color: ${props => !props.data.select ? "#9E9E9E" : "white"};

    width: 100%;
    height: 25px;

    border: none;
    border-radius: 0.3rem;
 
    transition: 0.2s;
`