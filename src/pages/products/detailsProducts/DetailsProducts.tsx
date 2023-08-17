import { useEffect, useState } from "react";
import { ButtonFilterProducts } from "../../../componentes/ButtonFilterProducts/ButtonFilterProducts";
import { ButtonReturn } from "../../../componentes/ButtonReturn/ButtonReturn";
import { StyledContent, StyledDetailsHeader, StyledTablesDetails } from "./style";
import { getDatailsProduct } from "../../../services/produtcs";
import { useParams } from "react-router-dom";
import { TableDetailsProduct } from "../../../componentes/TableDetailsProduct/TableDetailsProduct";

type dataType = {
    media120Dias: number
    nome: string
    percentualUltimos30Dias: number
    ultimos30Dias: number
    ultimos60Dias: number
    ultimos90Dias: number
    ultimos120Dias: number
}

export function DetailsProducts(){

    let params = useParams()
    const id = params.postId

    const [data, setData] = useState<dataType>()
    const changeData = async () => {
        const response = await getDatailsProduct(id)
        setData(response)
    }
    useEffect(()=>{
        changeData()
    },[])
    // console.log(data)


    return(
        <StyledContent>
            <ButtonReturn title="Produtos" url="/produtos"/>
            <h2 className="title">{data?.nome}</h2>
            <StyledDetailsHeader>
                <ButtonFilterProducts title="Média 120 dias" value={data?.media120Dias??0} background={true}/>
                <ButtonFilterProducts title="Últimos 30 dias" value={data?.ultimos30Dias??0} percentage={data?.percentualUltimos30Dias}/>
                <ButtonFilterProducts title="Útimos 60 dias" value={data?.ultimos60Dias??0}/>
                <ButtonFilterProducts title="Útimos 90 dias" value={data?.ultimos90Dias??0}/>
                <ButtonFilterProducts title="Útimos 120 dias" value={data?.ultimos120Dias??0}/>
            </StyledDetailsHeader>
            <StyledTablesDetails>
                <TableDetailsProduct id={id??''} typeTable="EM_ALTA"/>
                <TableDetailsProduct id={id??''} typeTable="EM_BAIXA"/>
            </StyledTablesDetails>
        </StyledContent>
    )
}