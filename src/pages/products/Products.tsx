import { Outlet } from "react-router-dom";
import { Aside } from "../../componentes/Aside/Aside";
import { Header } from "../../componentes/Header/Header";

import {StyledMain, StyledProducts } from "./style";

export function Products(){
    return(
        <StyledProducts>
            <Aside page={"Produtos"}></Aside>
            <StyledMain>
                <Header/>
                <Outlet/>
            </StyledMain>
        </StyledProducts>
    )
}