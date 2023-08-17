import {useState, useEffect} from 'react'

import { getTableProduct } from '../../services/produtcs'

import { TitleTable } from "../TitleTable/TitleTable"
import { StyledTableDiv, StyledTableDivHeader, StyledTableHeader, StyledTableRow, StyledTabled } from "./style"
import trendinDownImg from '../../assets/product/trending-down.png'
import trendinupImg from '../../assets/product/trending-up.png'

type propsType = {
    id: string
    typeTable:string
}

type dataType = {
    id: string
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
        console.log(response)
    }


    return(
        <StyledTableDiv>
            <StyledTableDivHeader>
                {typeTable === "EM_ALTA" && <TitleTable color="#FF3333" img={trendinupImg} title="Cliente em alta"/>}
                {typeTable === "EM_BAIXA" && <TitleTable color="#00C247" img={trendinDownImg} title="Clientes em baixa"/>}     
            </StyledTableDivHeader>
            <StyledTabled>
                <StyledTableHeader>
                    <div className="id"><p>ID</p></div>
                    <div className="title"><p>Cliente</p></div>
                    <div className="percentage"><p>Percentual</p></div>
                    <div className="amount">Qtd.</div>
                </StyledTableHeader>
                {data.map((data:dataType,index) => {
                    return(
                        <StyledTableRow line={index} key={index}>
                            <div className="id"><p>{data.id}</p></div>
                            <div className="name"><p>{data.nome}</p></div>
                            <div className="percentage"><p>{data.percentual > 0 ? `+${Math.floor(data.percentual)}%` : `${Math.floor(data.percentual)}%`}</p></div>
                            <div className="amount"><p>{data.quantidade}</p></div>
                        </StyledTableRow>
                        )
                })}
            </StyledTabled>
        </StyledTableDiv>
    )
}