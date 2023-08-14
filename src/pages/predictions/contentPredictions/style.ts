import { styled } from "styled-components"

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    color: #212121;
`

export const StyledSearchDiv = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);
`

export const StyledPredictionsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 55vh;
    padding: 1rem;
    gap: 1rem;
`