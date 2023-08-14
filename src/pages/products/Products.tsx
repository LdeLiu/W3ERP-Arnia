import { Aside } from "../../componentes/Aside/Aside";
import { Header } from "../../componentes/Header/Header";
import { StyledContent, StyledMain, StyledProducts } from "./style";

export function Products(){
    return(
        <StyledProducts>
            <Aside page={"Produtos"}></Aside>
            <StyledMain>
                <Header/>
                <StyledContent>
                     <p>Produtos</p>
                </StyledContent>
            </StyledMain>
        </StyledProducts>
    )
}