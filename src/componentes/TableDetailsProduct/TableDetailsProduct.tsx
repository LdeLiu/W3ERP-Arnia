import {useState, useEffect} from 'react'
import { TitleTable } from "../TitleTable/TitleTable"
import { StyledTableDiv, StyledTableDivHeader, StyledTableHeader, StyledTableRow, StyledTabled } from "./style"
import { getTableProduct } from '../../services/produtcs'

type propsType = {
    id:number
    typeTable:string
}

type dataType = {
    id: number
    nome: string
    percentual: number
    quantidade: number
}

export function TableDetailsProduct({id,typeTable}:propsType){


    const [data, setData] = useState([])
    useEffect(() =>{
        getTableData()
    },[])

    async function getTableData(){
        const response = await getTableProduct(id,typeTable)
        setData(response)
    }


    return(
        <StyledTableDiv>
            <StyledTableDivHeader>
                {typeTable === "EM_ALTA" && <TitleTable color="#C5CFFF" img={} title="Cliente em alta"/>}
                {typeTable === "EM_BAIXA" && <TitleTable color="#001C98" img={} title="Clientes em baixa"/>}     
            </StyledTableDivHeader>
            <StyledTabled>
                <StyledTableHeader>
                    <div className="id"><p>ID</p></div>
                    <div className="title"><p>PRODUCT</p></div>
                    <div className="percentual"><p>PERCENTUAL</p></div>
                    <div className="button"></div>
                </StyledTableHeader>
                {data.map((data:dataType,index) => {
                    return(
                        <StyledTableRow line={index} key={index}>
                            <div className="id"><p>{data.id}</p></div>
                            <div className="name"><p>{data.nome}</p></div>
                            <div className="percentual"><p>{data.percentual > 0 ? `+${Math.floor(data.percentual)}%` : `${Math.floor(data.percentual)}%`}</p></div>
                            <div className="button"><p>{data.quantidade}</p></div>
                        </StyledTableRow>
                        )
                })}
            </StyledTabled>
        </StyledTableDiv>
    )
}