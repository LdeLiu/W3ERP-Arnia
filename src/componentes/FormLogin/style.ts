import styled from 'styled-components'



export const DivLoginStyled = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

width: 60%;
`

export const FormLoginStyled = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

width: 60%;

`

export const FormTitleStyled = styled.h2`
font-size: 2rem;
`

export const FormGrupStyled = styled.div<{ error?: {} }>`
display: flex;
position: relative;

input:focus, label:focus{
    border: ${props => props.error ? '1px solid red' : '1px solid #00C247'};
    outline: none;
}

`

export const InputLogin = styled.input<{ error?: {} }>`
border: ${props => props.error ? '1px solid red' : '1px solid #E0E0E0'};
border-radius: 10px;
padding: 7px;

width: 100%;
height: 2.8rem;


`

export const LabelLogin = styled.label`
position: absolute;
top: -8px;
left: 7px;

background-color: white;
padding-inline: 4px;

color: black;
font-size: 13px;
`

export const ImgShowPassword = styled.img`
height: 1.3rem;
position: absolute;

right: 1%;
top: 30%;
`

export const OtherButtons = styled.div`
display: flex; 
justify-content: space-between;
`

export const CheckboxContainer = styled.div`
display: flex;
gap: 0.5rem;
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`

`
export const TextCheckBox = styled.label`
font-weight: bold;
`
export const StyledCheckbox = styled.label`
border: 1px solid gray;
padding: 0.5rem;

`



export const ButtonFormLogin = styled.input`
background-color: #001C98;
color: white;
font-weight: bolder;
border: none;
border-radius: 1rem;
height: 2.8rem;
cursor: pointer;
`