import { styled } from "styled-components";

export const StyledDashBoard = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
    height: 8.5rem;

    .ProgressBarHeader{
        display: flex;
        justify-content: space-between;

        color: white;

        .filter{
            display: flex;
            gap: 0.5rem;
            background-color: white ;
            padding: 0.2rem 0.4rem ;
            border-radius: 0.3rem;

            color: black;
            font-size: 0.8rem;

            img{
                width: 1rem;
            }
            .select{
                background-color: transparent;
                border:none;

                color: #001C98;
                font-weight: bold;
                font-size: 0.8rem;
                select{
                    border: none;
                    color: #001C98;
                    font-weight: 600;
                    outline: none;
                }
            }
        }
    }
    .PBs{
        display: flex;
        justify-content: space-between;
    }
`

export const StyledTablesDashboard = styled.div`
    display: flex;
    gap: 1rem;
`