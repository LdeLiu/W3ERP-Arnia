import { styled } from "styled-components"; 

export const StyledAside = styled.div`

    min-width: 12.5rem;
    min-height: 100%;
    background-color: #001C98;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    padding: 1rem 0.3rem ;

    .contactus{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const StyledLogoAside = styled.img`
    width: 8rem;
`

export const StyledDivButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border: solid 1px red */
`

export const StyledDivContactUs = styled.div`
    width: 90%;
    background-color: #796CE0;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    position: relative;
    padding: 4rem 0.3rem 0.6rem 0.3rem; 

    p{
        color: white;
        font-size: 0.8rem;
        width: 80%;
        text-align: center;
    }

    button{
        background-color: #001C98;
        border: none;
        border-radius: 1rem;

        width: 85%;
        height: 2.1rem;
        /* padding: 0.5rem 1rem; */

        color: white;
        font-size: 0.8rem;

        cursor: pointer;
    }
    
`

export const StyledImgContactUs = styled.img`
    width: 100%;
    position: absolute;
    top: -6rem;

    @media only screen and (max-width: 894px) {
        top: -5rem;
    }
`

