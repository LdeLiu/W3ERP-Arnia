import { useState, useEffect } from "react";

import { TitleTable } from "../TitleTable/TitleTable";
import { StyledTableDiv, StyledTableDivHeader, StyledTableHeader, StyledTableRow, StyledTabled } from "./style";
import { getPredictionsHistoric, writeOffProduct } from "../../services/predictions";
import { format } from 'date-fns'
import historicImg from '../../assets/predictions/history.png'
import buttonImg from '../../assets/predictions/ações.png'

type dataType = {
    id: number
    nome: string
    ultimaCompra: string
    quantidade: number
}
type propsType = {
    id?: string
}

export function TablePredictionHistoric(props: propsType){


    const [data,setData] = useState([])
    useEffect(()=> {
        getDataHistoric()
    },[])

    async function getDataHistoric(){
        const response = await getPredictionsHistoric(props.id)
        setData(response)
    }

    async function darbaixa(id: number){
        console.log('deu baixa')
        writeOffProduct(id)
    }


    return(
        <StyledTableDiv>
            <StyledTableDivHeader>
                <TitleTable color="#EEEEEE" img={historicImg} title="Histórico"/>
            </StyledTableDivHeader>
            <StyledTabled>
                <StyledTableHeader>
                    <div className="id"><p>ID</p></div>
                    <div className="product"><p>Produto</p></div>
                    <div className="lastPurchase"><p>Última compra</p></div>
                    <div className="amount"><p>Qtd.</p></div>
                    <div className="button"><p>Dar baixa</p></div>
                </StyledTableHeader>
                {data.map((data: dataType,i) => {
                    if(i > 10){
                        return
                    }
                    return(
                        <StyledTableRow key={i} line={i}>
                            <div className="id"><p>{data.id}</p></div>
                            <div className="product" title={data.nome}><p>{`${(data.nome).substr(0, 23)}...`}</p></div>
                            <div className="lastPurchase"><p>{format(new Date(data.ultimaCompra), 'dd/MM/yy')}</p></div>
                            <div className="amount"><p>{data.quantidade}</p></div>
                            <div className="button"><button onClick={()=>{darbaixa(data.id)}}><img src={buttonImg} alt="" /></button></div>
                        </StyledTableRow>
                    )
                })} 
            </StyledTabled>
        </StyledTableDiv>
    )
}