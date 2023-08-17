
import { api } from "./api";

type loginType = {
    email: string;
    password: string;
}

export async function LoginApi({ email, password }: loginType) {

    await api.post('/central/autenticacao/login', {
        email,
        senha: password
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-TENANT-ID': 'arnia'
        }
    }).then(
        response => {
            
            if(response.status === 200) {
                localStorage.setItem('TOKEN', response.data.token)
                return
            }
            console.log('Fail login')
        }
    ).catch(
        error => console.log(error)
    )

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