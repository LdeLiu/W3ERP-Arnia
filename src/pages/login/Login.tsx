import { FormLogin } from "../../componentes/FormLogin/FormLogin"
import { LoginApi } from "../../services/login"
import { DivFormStyled, LoginStyled } from "./style"
import loginImg from '../../assets/imgAsideLogin.png'

// const LoginData = {
//     email: 'admin@arnia.com.br',
//     password: 'a2PrJyVPX3MCeCUE'
// }

export function Login() {

    return (
        <LoginStyled>
            <DivFormStyled>
                <FormLogin func={LoginApi} />
            </DivFormStyled>
            <img src={loginImg} />
        </LoginStyled>
    )
}