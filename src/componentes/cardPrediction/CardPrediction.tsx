
import { StyledBodyPreditions, StyledButtonDetails, StyledCardDiv, StyledCardHeader, StyledStatus } from "./style";

import userImg from '../../assets/predictions/user.png'
import arrowImg from '../../assets/dashboard/right.png'
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

type dataType = {
    data: {
        classificacao: string
        id: number
        nome: string
        produtos: [
            {
                nome: string
                proximaCompra: string
            }
        ]
    }
}

export function CardPrediction({data}: dataType){

    const navigate = useNavigate()
    const chengePageDetails = () => {
        navigate(`/predicoes/${data.id}`)
    }
    function verifyStatus(){
        if(data.classificacao === "EM_ALTA"){
            return('Em Alta')
        }
        if(data.classificacao === "EM_BAIXA"){
            return('Em Baixa')
        }
        return('Neutro')
    }
    const status = verifyStatus()

    return(
        <StyledCardDiv>
            <StyledCardHeader>
                <div>
                    <div className="img">
                        <img src={userImg} alt="" /> 
                    </div>
                    <div>
                        <div className="client">
                            <h4 title={(data.nome)}>{`${(data.nome).substr(0, 12)}...`}</h4>
                            <StyledStatus status={data.classificacao}><span>&bull;</span> {status}</StyledStatus>
                        </div>
                    </div>
                </div>
                <StyledButtonDetails onClick={chengePageDetails}><img src={arrowImg} alt="" /></StyledButtonDetails>
            </StyledCardHeader>
            <StyledBodyPreditions>
                <div className="header">
                    <div className="titleHeader">
                        <p>Produto</p>
                    </div>
                    <div className="valueHeader">
                        <p>Próx. compra</p>
                    </div>
                </div>
                {data.produtos.map((data,i) => {
                    return(
                        <div className="row" key={i}>
                            <div className="titleRow">
                                <p title={(data.nome)}>{`${(data.nome).substr(0, 14)}...`}</p>
                            </div>
                            <div className="valueRow">
                                <p>{format(new Date(data.proximaCompra), 'dd/MM/yy')}</p>
                             </div>
                        </div>
                    )
                })}
                
            </StyledBodyPreditions>
        </StyledCardDiv>
    )
}