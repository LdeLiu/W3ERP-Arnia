import { useState, useEffect } from "react";

import { TitleTable } from "../TitleTable/TitleTable";
import { StyledTableDiv, StyledTableDivHeader, StyledTableHeader, StyledTableRow, StyledTabled } from "./style";
import { getPredictionsSoldoff } from "../../services/predictions";
import SoldoffImg from '../../assets/predictions/facial-cleanser.svg'
import buttonImg from '../../assets/predictions/ações.png'
import { format } from "date-fns";

type dataType = {
    id: number
    nome: string
    ultimaCompra: string
    quantidade: number
    proximaCompra: string
}
type propsType = {
    id?: string
}

export function TablePredictionSoldoff(props: propsType){


    const [data,setData] = useState([])
    useEffect(()=> {
        getDataSoldoff()
    },[])

    async function getDataSoldoff(){
        const response = await getPredictionsSoldoff(props.id)
        setData(response)
    }

    async function darbaixa(){
        console.log('deu baixa')
    }

    return(
        <StyledTableDiv>
            <StyledTableDivHeader>
                <TitleTable color="#FFE1E1" img={SoldoffImg} title="Produtos esgotados" colorTitle="#FF3333"/>
            </StyledTableDivHeader>
            <StyledTabled>
                <StyledTableHeader>
                    <div className="id"><p>ID</p></div>
                    <div className="product"><p>Produto</p></div>
                    <div className="lastPurchase"><p>Última compra</p></div>
                    <div className="nextPurchase"><p>Prox. compra</p></div>
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
                            <div className="nextPurchase"><p>{format(new Date(data.proximaCompra), 'dd/MM/yy')}</p></div>
                            <div className="amount"><p>{data.quantidade}</p></div>
                            <div className="button"><button onClick={darbaixa}><img src={buttonImg} alt="" /></button></div>
                        </StyledTableRow>
                    )
                })} 
            </StyledTabled>
        </StyledTableDiv>
    )
}