import { api } from "./api";

export async function getPrroducts(pag: number,clas: string,filter: string){
    const token = localStorage.getItem('TOKEN')
    const classification = (clas ? `classificacao=${clas}&` : '')
    const query = (filter ? `&query=${filter}` : '')
  
    const response = await api.get(`/app/produto?${classification}page=${pag}&size=7${query}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    // console.log(response)
  return response.data
  }

  export async function getDatailsProduct(id?: string){
    const token = localStorage.getItem('TOKEN')
  
    const response = await api.get(`/app/produto/${id??''}/resumo`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    // console.log(response)
  return response.data
  }

  export async function getTableProduct(id?: number, clas?: string){
    const token = localStorage.getItem('TOKEN')
    const classication = clas ? `?classificacao=${clas}` : ''
  
    const response = await api.get(`/app/produto/${id??''}/clientes${classication}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    // console.log(response)
  return response.data
  }