import { styled } from "styled-components";

export const StyledProgressBar = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #02156A;
    border-radius: 0.8rem;

    width: 13.5rem;
    height: 4.4rem;

    padding: 0.8rem;
    .divCircularPB{
        width: 2.5rem;
    }
    .details{
        color: white;
        div{
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        p{
            font-size: 0.7rem;
        }
        .value{
            font-size: 1.5rem;
        }
    }
`

export const StyledDivVariation = styled.div<{bg: boolean}>`
    background-color: ${props => props.bg ? "#00C247" : "#FF3333"};
    border-radius: 2rem;

    padding: 0.2rem 1rem;
`