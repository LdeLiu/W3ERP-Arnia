import { StyledDivLoader, StyledLoader } from "./style";
import imgLodaer from '../../assets/loader.svg'


export function Loader(){
    return(
        <StyledDivLoader>
            <StyledLoader src={imgLodaer}/>
        </StyledDivLoader>
    )
}