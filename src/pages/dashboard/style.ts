import { styled } from "styled-components";

export const StyledDashBoard = styled.div`
    display: flex;
    width: 100vw;
`

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 84vw;
    @media only screen and (max-width: 894px) {
        width: 80vw;
    }
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
`

export const StyledDivProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    background-color: #001C98 ;
    border-radius: 0.5rem;

    width: 100%;
    height: 25vh;

    .ProgressBarHeader{
        display: flex;
        justify-content: space-between;

        color: white;

        .filter{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background-color: white ;
            padding: 0.2rem 0.4rem ;
            border-radius: 0.3rem;

            color: black;
            font-size: 0.8rem;

            img{
                width: 1rem;
            }
            button{
                background-color: transparent;
                border:none;

                color: #001C98;
                font-weight: bold;
                font-size: 0.8rem;
            }
        }
    }
    .PBs{
        display: flex;
        justify-content: space-around;
    }
`