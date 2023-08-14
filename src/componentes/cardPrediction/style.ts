import { styled } from "styled-components";

export const StyledCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 23.8%;
    max-height: 12.8rem;
    gap: 1rem;

    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 1rem;
`
export const StyledCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    .img{
        height: 3rem;
        width: 3rem;
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: #C5CFFF;
        border-radius: 1.5rem;
        img{
            height: 1.5rem;
        }
    }
    div{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        .client{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0;
            h4{
                font-size: 0.8rem;
                cursor: default;
            }
        }
    }
`
export const StyledStatus = styled.p<{status: string}>`
    color: ${props=> props.status === "EM_ALTA" ? "#00C247 " : props.status === 'EM_BAIXA' ? "#FF3333" : 'gray'};
    font-size: 0.8rem;

    span{
        font-size: 1rem;
    }
`
export const StyledButtonDetails = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const StyledBodyPreditions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 6.5rem;

    background-color: #EEEEEE;
    border-radius: 0.5rem;
    padding: 0.5rem;
    .header{
        display: flex;
        padding: 0.5rem 0.5rem 0 0.5rem;
        justify-content: space-between;
        color: #796CE0;
        font-size: 0.7rem;

        .titleHeader{
            width: 60%;
        }
        .valueHeader{
            width: 40%;
        }
    }
    .row{
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem;
        font-size: 0.7rem;
        color: #424242;
        .titleRow{
            width: 60%;
            cursor: default;
        }
        .valueRow{
            width: 40%;
            display: flex;
            justify-content: center;

            font-weight: bold;
        }
    }
`