import { useNavigate } from "react-router-dom";
import { StyledButtonAside, StyledImgButton } from "./style";
import iconDashboard from "../../assets/aside/pie-two.png";
import iconPredictions from "../../assets/aside/chart-line.png";
import iconProducts from "../../assets/aside/facial-cleanser.png";


type propsType = {
    txt: string
    page: string
}

export function ButtonAside({txt,page}: propsType){

    const iconButton = () => {
        if(txt === 'Dashboard'){
            return iconDashboard
        }
        if(txt === 'Predições'){
            return iconPredictions
        }
        if(txt === 'Produtos'){
            return iconProducts
        }
    }

    const thisPage = txt === page
    const linkNavigate = "/" + txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const navigate = useNavigate()
    const handlePage = () => {
        navigate(linkNavigate)
    }

    return(
        <>
            <StyledButtonAside onClick={handlePage} thispage={thisPage}>
                <StyledImgButton src={iconButton()} alt="" />
                <p>{txt}</p>
            </StyledButtonAside>
        </>
    )
}