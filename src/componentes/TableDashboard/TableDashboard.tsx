import { useState, useEffect } from "react";
import { DashboarTable } from "../../services/dashboard";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { TitleTable } from "../TitleTable/TitleTable";
import { StyledTableDiv, StyledTableDivHeader, StyledTableHeader, StyledTableRow, StyledTabled } from "./style";

import productImg from '../../assets/tableDashboard/facial-cleanser.svg'
import clientsImg from '../../assets/tableDashboard/every-user.svg'
import rightImg from '../../assets/tableDashboard/right.png'
import { useNavigate } from "react-router-dom";

type propsType = {
    titleTable: string
}
type dataType = {
    id: number
    nome: string
    percentual: number
}

export function TableDashboard({titleTable}: propsType){

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(true)
    useEffect(() =>{
        getTableData()
    },[filter])

    async function getTableData(){
        const response = await DashboarTable({title:titleTable, filter: filter})
        setData(response)
    }
    const chengePage = (id: Number) => {
        const page = (titleTable == "produtos" ? titleTable : "predicoes")
        navigate(`/${page}/${id}`)
    }
        
    return(
        <StyledTableDiv>
            <StyledTableDivHeader>
                {titleTable === "produtos" && <TitleTable color="#C5CFFF" img={productImg} title="Produtos"/>}
                {titleTable === "clientes" && <TitleTable color="#001C98" img={clientsImg} title="Clientes"/>}     
                <SwitchButton func={setFilter}/>
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
                            <div className="button" onClick={()=>{chengePage(data.id)}}><img src={rightImg} alt="" /></div>
                            {/* linha acima vai ser um botão que deve me redirecionar para detalhes do produto, devo passar o ID do produto clicado */}
                        </StyledTableRow>
                        )
                })}
            </StyledTabled>
        </StyledTableDiv>
    )
}