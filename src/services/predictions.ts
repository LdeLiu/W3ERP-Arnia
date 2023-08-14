import { api } from "./api";


export async function getPredictions(query?:string){

    const token = localStorage.getItem('TOKEN')

    const response = await api.get(`/app/predicao${query ? `?query=${query}` : ""}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-TENANT-ID': 'arnia'
        }
      })
    return response.data.content
}

export async function getPredictionsDetails(id?:string){
  const token = localStorage.getItem('TOKEN')

  const response = await api.get(`/app/predicao${id ? `?clienteId=${id}` : ''}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
  })
return response.data.content
}

export async function getPredictionsHistoric(id?:string){
  const token = localStorage.getItem('TOKEN')

  const response = await api.get(`/app/predicao/${id}/historico`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
  })
  // console.log(response)
return response.data.content
}

export async function getPredictionsSoldoff(id?:string){
  const token = localStorage.getItem('TOKEN')

  const response = await api.get(`/app/predicao/${id}/esgotando`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
  })
  // console.log(response)
return response.data.content
}
