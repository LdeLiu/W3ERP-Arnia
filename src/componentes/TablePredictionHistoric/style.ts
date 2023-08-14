import { styled } from "styled-components";

export const StyledTableDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    width: 50%;
    height: fit-content;
    border-radius: 0.5rem;
    padding: 1rem;

    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);


`

export const StyledTableDivHeader = styled.div`
    display: flex;
    justify-content: start;
`

export const StyledTabled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .id{
        width: 10%;
        display: flex;
        justify-content: center;
    }
    .product{
        width: 30%;
        cursor: pointer;
    }
    .lastPurchase{
        width: 30%;
        display: flex;
        justify-content: center;
    }
    .amount{
        width: 10%;
        display: flex;
        justify-content: center;
    }
    .button{
        width: 20%;
        display: flex;
        justify-content: center;
        button{
            border: none;
            background-color: transparent;
            cursor: pointer;
            img{
                height: 2rem;
                width: 2rem;
            }
        }
    }
`
export const StyledTableHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    gap: 1rem;

    background-color: #001C98;
    border-radius: 0.8rem 0.8rem 0 0;

    color: white;
    font-size: 0.6rem;
    
`

export const StyledTableRow = styled.div<{line: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    gap: 1rem;
    
    background-color: ${props => props.line % 2 === 0 ? "#F5F5F5" : "#FAFAFA"};
    color: black;
    font-size: 0.6rem;
`