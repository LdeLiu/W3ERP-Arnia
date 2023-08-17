import { useNavigate } from "react-router-dom"
import { StyledStatus, StyledTableHeader, StyledTableRow, StyledTabled } from "./style"

type dataType = {
    data?: {
        content: [
           { id: number
            nome: string
            percentual: number
            classificacao: string
            }
        ]
    }
}

export function TableProducts({data}:dataType){


    return(
        <StyledTabled>
        <StyledTableHeader>
            <div className="id"><p>Id</p></div>
            <div className="title"><p>Poduto</p></div>
            <div className="status"><p>Status</p></div>
            <div className="percentual"><p>Percentual</p></div>
        </StyledTableHeader>
        {data?.content.map((data,index) => {

                const navigate = useNavigate()
                const chengeToDetails = () => {
                    navigate(`/produtos/${data.id}`)
                }

            return(
                <StyledTableRow line={index} key={index} onClick={chengeToDetails}>
                    <div className="id"><p>{data.id}</p></div>
                    <div className="name"><p>{data.nome}</p></div>
                    <div className="status">
                        <StyledStatus status={data.classificacao}>
                            <p>{data.classificacao[0].toUpperCase() + data.classificacao.substring(1).toLowerCase().replace('_',' ')}</p>
                        </StyledStatus>
                    </div>
                    <div className="percentual">
                        <p>{data.percentual > 0 ? `+${Math.floor(data.percentual)}%` : `${Math.floor(data.percentual)}%`}</p>
                    </div>
                </StyledTableRow>
                )
        })}
    </StyledTabled>
    )
}