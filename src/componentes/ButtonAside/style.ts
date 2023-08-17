import { styled } from "styled-components";

interface typeProps {
    thispage: boolean
}

export const StyledButtonAside = styled.button<typeProps>`
    width: 100%;

    padding: 0.5rem;
    background-color: ${props => props.thispage ? "rgba(118, 130, 193, 0.3)" : "transparent"} ;
    border: none;
    border-radius: 0.3rem;

    display: flex;
    gap: 0.7rem;
    align-items: center;

    font-size: 0.9rem;
    color: white;
    font-weight: bolder;
    cursor: pointer;
`

export const StyledImgButton = styled.img`
    width: 1rem;
`