import { useState } from "react";
import { StyledArrow, StyledButtonPopUp, StyledDivInfoUser, StyledHeader, StyledMenuPopUp, StyledUserDiv, StyledUserImg } from "./style";
import { useNavigate } from "react-router-dom";


export function Header(){


    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const navidate = useNavigate()
    const logout = () => {
        //clean token on localstorage
        navidate("/")
    }


    return(
        <StyledHeader>
            <StyledUserDiv>
                <StyledUserImg src="./header/user.png" alt="" />
                <StyledDivInfoUser>
                    <h4>Rafael Pimenta</h4>
                    <p>rafael@gmail.com</p>
                </StyledDivInfoUser>
                <StyledArrow onClick={handleShowMenu}>
                    <img src="./header/angle-down-solid.svg" alt="" />
                </StyledArrow>
                <StyledMenuPopUp openMenu={showMenu} className="tooltip">
                    <StyledButtonPopUp>
                        <img src="/header/setting-two.png" alt="" />
                        <p>Configurações</p>
                    </StyledButtonPopUp>
                    <hr />
                    <StyledButtonPopUp onClick={logout}>
                        <img src="/header/logout.png" alt="" />
                        <p>Sair</p>
                    </StyledButtonPopUp>
                </StyledMenuPopUp>
            </StyledUserDiv>
        </StyledHeader>
    )
}