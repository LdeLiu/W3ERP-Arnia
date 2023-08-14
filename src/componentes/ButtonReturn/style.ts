import { styled } from "styled-components";

export const StyledDivReturn = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #EEEEEE;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            background-color: transparent;
            cursor: pointer;
            img{
                height: 1rem;
            }
        }
    }
`