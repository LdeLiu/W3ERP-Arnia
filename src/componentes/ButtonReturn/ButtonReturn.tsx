import { useNavigate } from "react-router-dom";
import { StyledDivReturn } from "./style";
import arrowImg from '../../assets/returnbutton/arrow-left-solid.svg'

type propsType = {
    url: string
    title: string
}

export function ButtonReturn({title, url}: propsType){
    
    const navigate = useNavigate()
    const returnPage = ()=>{
        navigate(url)
    }

    return(
        <StyledDivReturn>
                <div className="button">
                    <button onClick={returnPage}><img src={arrowImg} alt="" /></button>
                </div>
                <p>{title}</p>
        </StyledDivReturn>
    )
}