import { FormLogin } from "../../componentes/FormLogin/FormLogin"
import { LoginApi } from "../../services/login"
import { DivFormStyled, LoginStyled } from "./style"

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
            <img src="imgAsideLogin.png" />
        </LoginStyled>
    )
}