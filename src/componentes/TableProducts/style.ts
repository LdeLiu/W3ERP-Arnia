import { styled } from "styled-components";

export const StyledTabled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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

    .id{
        width: 10%;
        display: flex;
        justify-content: center;
    }
    .title{
        width: 30%;
    }
    .percentual{
        width: 30%;
        display: flex;
        justify-content: center;
    }
    .status{
        width: 30%;
        display: flex;
        justify-content: center;
    }

`

export const StyledTableRow = styled.button<{line: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    gap: 1rem;
    border: none;
    
    background-color: ${props => props.line % 2 === 0 ? "#F5F5F5" : "#FAFAFA"};
    color: black;
    font-size: 0.6rem;

    .id{
        width: 10%;
        display: flex;
        justify-content: center; 

    }
    .name{
        width: 30%; 
        display: flex;
        justify-content: start;
    }
    .percentual{
        width: 30%;
        display: flex;
        justify-content: center;

    }
    .status{
        width: 30%;
        display: flex;
        justify-content: center; 

    }

`
export const StyledStatus = styled.div<{status: string}>`
    background-color: ${props => props.status == "EM_ALTA" ? "#D9FEE6" : props.status == "EM_BAIXA" ? "#FFE1E1" : "transparent"};
    color: ${props => props.status == "EM_ALTA" ? "#00C247" : props.status == "EM_BAIXA" ? "#FF3333" : "gray"};
    border-radius: 0.3rem;
    padding: 0.3rem 0.5rem;
`