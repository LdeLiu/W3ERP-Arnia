import { styled } from "styled-components";

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    color: #212121;
    .tables{
        display: flex;
        gap: 1rem;
    }
`
export const StyledHeaderDetails = styled.div<{bg: string}>`
    height: 6rem;
    background-color: #001C98;
    background-image: url('${props => props.bg}');

    border-radius: 1rem;

    color: white;

    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    justify-content: center;
    gap: 0.3rem;
    div{
        display: flex;
        gap: 1rem;
        .divInfo{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            img{
                width: 1rem;
                height: 1rem;
            }
        }
    }
`

