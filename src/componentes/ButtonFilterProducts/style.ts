import { styled } from "styled-components";

export const StyledButtonFilter = styled.button<{selected: boolean}>`
    background-color: ${props => props.selected ? "#001C98" : "transparent"};
    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    width: 20%;
    .info{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`
export const StyledTitle = styled.p<{selected: boolean}>`
    color: ${props => props.selected ? "white" : "#212121"};
`
export const StyledValue = styled.p<{selected: boolean}>`
            font-size: 1.5rem;
            color: ${props => props.selected ? "white" : "#001C98"};
`

export const StyledPercentage = styled.div<{positive: boolean}>`
    background-color: ${props => props.positive ? "#00C247" : "#FF3333"};
    border-radius: 1rem;
    padding: 0.2rem 2rem;
    display: flex;
    align-items: center; 
    p{
        font-size: 0.7rem;
    }
`
