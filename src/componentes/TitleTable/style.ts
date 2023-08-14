import { styled } from "styled-components";

export const StyledTitleTable = styled.div<{color?: string}>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p{
        color:${props => props.color ? props.color : 'black'};
        font-size: 1rem;
    }
`

export const StyledDivImg = styled.div<{color : string}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;

    background-color: ${props => props.color};
    border-radius: 0.5rem;
    img{
        width: 1rem;
        height: 1rem;
    }
`