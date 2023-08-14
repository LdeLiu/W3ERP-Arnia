import { useState } from "react";
import { StyledButton, StyledButtonDiv } from "./style";


export function SwitchButton({func}:any){

    const [buttonSelected, setButtonSelected] = useState(true)
    const handleButtonSelected = () => {
        console.log("mudando filtro, click no botão")
        setButtonSelected(!buttonSelected)
        func(!buttonSelected)
    }

    return(
        <StyledButtonDiv>
            <StyledButton data={{select: buttonSelected, color: "#00C247"}} onClick={handleButtonSelected}>Em alta</StyledButton>
            <StyledButton data={{select: !buttonSelected, color: "#FF3333"}} onClick={handleButtonSelected}>Em baixa</StyledButton>
        </StyledButtonDiv>
    )
}