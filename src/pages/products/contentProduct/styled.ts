import { styled } from "styled-components";

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
`

export const StyledDivTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    .search{
        display: flex;
        justify-content: start;
        gap: 1rem;
        position: relative;
        .filter{
            height: 2.5rem;
            width: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background-color: #F5F5F5;
            border: none;
            border-radius: 0.5rem;
            img{
                height: 1rem;
            }
        }
    }
    .tableFooter{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 0.8rem;
            color: #9E9E9E;
        }
    }
`
export const StyledDivFilter = styled.div`
    position: absolute;
    left: 21rem;
    background-color: white;
`
