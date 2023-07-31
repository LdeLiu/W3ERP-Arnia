
import { api } from "./api";

type loginType = {
    email: string;
    password: string;
}

export async function LoginApi({ email, password }: loginType) {

    const response = await api.post('/autenticacao/login', {
        email,
        senha: password
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-TENANT-ID': 'arnia'
        }
    })

    if (response.status == 200) {
        localStorage.setItem('TOKEN', response.data.token)
        return (true)
    }
    return (false)
    alert('Fail login')

}