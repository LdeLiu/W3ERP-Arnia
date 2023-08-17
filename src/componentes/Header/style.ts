import { styled } from "styled-components";

export const StyledHeader = styled.div`
    background-color: white;
    height: 5.5rem;
    width: 100%;
    max-height: 4.3rem;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;

    padding: 1rem 2rem;

    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);
`

export const StyledUserDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    p{
        font-size: 0.7rem;
        color: gray;
    }
    .tooltip:before {
    border: 10px solid transparent;
    border-bottom-color: white;
    content: "";
    top: -18px;
    right: 10px;
    position: absolute;
    }
`
export const StyledUserImg = styled.img`
    width: 2.3rem;
    height: 2.3rem;
`
export const StyledDivInfoUser = styled.div`
    /* display: flex;
    flex-direction: column; */
`
export const StyledArrow = styled.button`
    border: none;
    background-color: transparent;
    img{
        width: 1rem;
        }
`

export const StyledMenuPopUp = styled.div<{openmenu: boolean}>`
    display: ${props => props.openmenu ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    /* align-items: center; */

    position: absolute;
    z-index: 999;
    bottom: -5rem;
    right: 1.2rem;

    width: 9rem;
    height: 5rem;

    border-radius: 1rem;

    background-color: white;
    box-shadow: 0px 1px 20px  rgba(0, 0, 0, 0.2);


`
export const StyledButtonPopUp = styled.button`
    padding: 0 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    gap: 0.5rem;

    p{
        font-size: 0.8rem;
    }
    img{
        width: 1rem;
    }
`