import { StyledDivImg, StyledTitleTable } from "./style";

type propsType = {
    color: string
    img: string
    title: string
    colorTitle?: string
}

export function TitleTable({color,title,img,colorTitle}: propsType){
    return(
        <StyledTitleTable color={colorTitle}>
            <StyledDivImg color={color}>
                <img src={img} alt="" />
            </StyledDivImg>
            <p>{title}</p>
        </StyledTitleTable>
    )
}