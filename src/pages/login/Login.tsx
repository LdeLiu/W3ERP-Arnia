import { Navigate } from "react-router-dom"
import { FormLogin } from "../../componentes/FormLogin/FormLogin"
import { LoginApi } from "../../services/login"
import { DivFormStyled, LoginStyled } from "./style"
import { useState } from "react"

const LoginData = {
    email: 'admin@arnia.com.br',
    password: 'a2PrJyVPX3MCeCUE'
}


export function Login() {

    const [logged, setLogged] = useState(false)
    const handleLogin = async () => {
        setLogged(await LoginApi(LoginData))
    }

    return (
        <LoginStyled>
            <DivFormStyled>
                <FormLogin func={handleLogin} />
            </DivFormStyled>
            <img src="imgAsideLogin.png" />
            <button onClick={handleLogin}>TESTE</button>
            {logged === true && <Navigate to="/dashboard" />}
        </LoginStyled>
    )
}