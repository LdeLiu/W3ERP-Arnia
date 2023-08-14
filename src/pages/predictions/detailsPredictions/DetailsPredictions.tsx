import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { getPredictionsDetails } from '../../../services/predictions'

import { StyledContent, StyledHeaderDetails } from "./style"
import { ButtonReturn } from "../../../componentes/ButtonReturn/ButtonReturn"
import headerBackground from '../../../assets/predictions/fundoW3.png'
import mailImg from '../../../assets/predictions/mail.png'
import phoneImg from '../../../assets/predictions/phone.png'
import { TablePredictionHistoric } from '../../../componentes/TablePredictionHistoric/TablePredictionHistoric'
import { TablePredictionSoldoff } from '../../../componentes/TablePredictionSoldoff/TablePredictionSoldoff'


export function DetailsPredictions(){

    let params = useParams()
    const id = params.postId
    // params.postId

    const [data, setData] = useState({
        nome: 'Nome',
        telefone: 'Tel',
        email: 'E-mail'
    })
    async function getData(){
        const response = await getPredictionsDetails(id)
        setData(response[0])
    }
    useEffect(() =>{
        getData()
    },[]) 

    return(
        <StyledContent>
            <ButtonReturn title="Predições" url="/predicoes"/>
            <StyledHeaderDetails bg={headerBackground}> 
                    <h3>{data.nome}</h3>
                    <div>
                        <div className="divInfo">
                            <img src={phoneImg} alt="" />
                            <p>{data.telefone}</p>
                        </div>
                        <div className="divInfo">
                            <img src={mailImg} alt="" />
                            <p>{data.email}</p>
                        </div>
                    </div>
            </StyledHeaderDetails>
            <div className='tables'>
                <TablePredictionHistoric id={id}/>
                <TablePredictionSoldoff id={id}/>
            </div>
        </StyledContent>
    )
}