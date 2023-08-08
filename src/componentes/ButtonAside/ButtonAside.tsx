import { useNavigate } from "react-router-dom";
import { StyledButtonAside, StyledImgButton } from "./style";

type propsType = {
    imgSrc: string
    txt: string
    page: string
}

export function ButtonAside({imgSrc,txt,page}: propsType){

    const isPage = txt === page
    const linkNavigate = "/" + txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const navigate = useNavigate()
    const handlePage = () => {
        navigate(linkNavigate)
    }

    return(
        <>
            <StyledButtonAside onClick={handlePage} ispage={isPage}>
                <StyledImgButton src={imgSrc} alt="" />
                <p>{txt}</p>
            </StyledButtonAside>
        </>
    )
}