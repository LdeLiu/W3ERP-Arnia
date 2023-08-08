import { api } from "./api";

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

