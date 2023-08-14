
import { api } from "./api";

type loginType = {
    email: string;
    password: string;
}

export async function LoginApi({ email, password }: loginType) {

    const response = await api.post('/central/autenticacao/login', {
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
    alert('Fail login')
    return (false)
}

export async function getUser(){

    const token = localStorage.getItem('TOKEN')

    const response = await api.get('/central/usuario/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-TENANT-ID': 'arnia'
        }
      })
    return response.data
}