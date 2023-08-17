import { useState,useEffect } from "react";
import { StyledArrow, StyledButtonPopUp, StyledDivInfoUser, StyledHeader, StyledMenuPopUp, StyledUserDiv, StyledUserImg } from "./style";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/login";

import userImg from '../../assets/header/user.png'
import angleDownImg from '../../assets/header/angle-down-solid.svg'
import settingImg from '../../assets/header/setting-two.png'
import logoutImg from '../../assets/header/logout.png'


type dataProps = {
    nome: string
    email: string
}

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

    const [user,setUser] = useState<dataProps>()
    const handleUser = async () => {
        const response = await getUser()
        setUser(response)
    }
    useEffect(() => {
        handleUser()
    },[])


    return(
        <StyledHeader>
            <StyledUserDiv>
                <StyledUserImg src={userImg} alt="" />
                <StyledDivInfoUser>
                    <h4>{user?.nome}</h4>
                    <p>{user?.email}</p>
                </StyledDivInfoUser>
                <StyledArrow onClick={handleShowMenu}>
                    <img src={angleDownImg} alt="" />
                </StyledArrow>
                <StyledMenuPopUp openmenu={showMenu} className="tooltip">
                    <StyledButtonPopUp>
                        <img src={settingImg} alt="" />
                        <p>Configurações</p>
                    </StyledButtonPopUp>
                    <hr />
                    <StyledButtonPopUp onClick={logout}>
                        <img src={logoutImg} alt="" />
                        <p>Sair</p>
                    </StyledButtonPopUp>
                </StyledMenuPopUp>
            </StyledUserDiv>
        </StyledHeader>
    )
}