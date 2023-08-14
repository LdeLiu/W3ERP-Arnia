import { api } from "./api";

type propsType = {
  title: string
  filter: boolean
}

const token = localStorage.getItem('TOKEN')

export async function DashboarResume(){
    const response = await api.get('/app/dashboard/resumo', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-TENANT-ID': 'arnia'
        }
      })
    return await response.data
}

export async function DashboarTable({title,filter}:propsType){
  const response = await api.get(`/app/dashboard/${title}?classificacao=${filter === true ? "EM_ALTA" : "EM_BAIXA"}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
  return await response.data
}

