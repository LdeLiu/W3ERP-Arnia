

import { Aside } from "../../componentes/Aside/Aside";
import { Header } from "../../componentes/Header/Header";
import { StyledMain, StyledPredictions } from "./style";
import { Outlet } from 'react-router-dom';

export function Predictions(){

    return(
        <StyledPredictions>
            <Aside page={"Predições"}></Aside>
            <StyledMain>
                <Header/>
                <Outlet/>
            </StyledMain>
        </StyledPredictions>
    )
}