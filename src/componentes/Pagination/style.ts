import { styled } from "styled-components";

export const StyledPaginationDiv = styled.div`
    display: flex;
    .pagNum{
        display: flex;
        gap: 0.3rem;
    }
`
export const StyledButtonArrow = styled.button`
    border: none;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`
export const StyledButtonPag = styled.button<{selected: boolean}>`
    background-color: ${props => props.selected ? '#001C98' : 'transparent'};
    color: ${props => props.selected ? 'white' : '#9E9E9E'};
    border-radius: 0.3rem;
    border: none;
    padding: 0.3rem 0.6rem;

    cursor: pointer;
`