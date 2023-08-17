import { useEffect, useState } from 'react'

import { Aside } from "../../componentes/Aside/Aside";
import { Header } from "../../componentes/Header/Header";
import { ProgressBar } from "../../componentes/ProgressBar/ProgressBar";
import { DashboarResume } from "../../services/dashboard";
import { StyledContent, StyledDashBoard, StyledDivProgressBar, StyledMain, StyledTablesDashboard } from "./style";
import { DashboardType } from './types';
import { TableDashboard } from '../../componentes/TableDashboard/TableDashboard';
import calendaryImg from '../../assets/dashboard/calendar.png'
import { Loader } from '../../componentes/Loader/Loader';

export function Dashboard() {

    const [seeLodaer, setSeeLodaer] = useState(true)
    const [resume, setResume] = useState<DashboardType>()
    useEffect(() => {
        getResume()
        setSeeLodaer(!seeLodaer)
    },[])
    async function getResume() {
        const response = await DashboarResume()
        setResume(response)
    }

    return (
        <StyledDashBoard>
            <Aside page={"Dashboard"}></Aside>
            <StyledMain>
                <Header/>
                {seeLodaer ? <Loader/> :
                    <StyledContent>
                        <StyledDivProgressBar>
                                <div className="ProgressBarHeader">
                                    <h4>Dashboard</h4>
                                    <div className="filter">
                                        <img src={calendaryImg} alt="" />
                                        <p>mostrar:</p> 
                                        <div className='select'>
                                            <select name="filter" id="">
                                                <option value="1" selected>Esse mês</option>
                                                <option value="3">3 meses</option>
                                                <option value="9">9 meses</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="PBs">
                                    <ProgressBar text="Total produtos em alta" percentage={resume?.percentualTotalProdutosAlta??0} value={resume?.quantidadeProdutosAlta??0} variation={resume?.percentualVariacaoProdutosAlta??0}/>
                                    <ProgressBar text="Total produtos em baixa" percentage={resume?.percentualTotalProdutosBaixa??0} value={resume?.quantidadeProdutosBaixa??0} variation={resume?.percentualVariacaoProdutosBaixa??0}/>
                                    <ProgressBar text="Total clientes em alta" percentage={resume?.percentualTotalClientesAlta??0} value={resume?.quantidadeClientesAlta??0} variation={resume?.percentualVariacaoClientesAlta??0}/>
                                    <ProgressBar text="Total clientes em baixa" percentage={resume?.percentualTotalClientesBaixa??0} value={resume?.quantidadeClientesBaixa??0} variation={resume?.percentualVariacaoClientesBaixa??0}/>
                                </div>
                        </StyledDivProgressBar>
                        <StyledTablesDashboard>
                            <TableDashboard titleTable='produtos'/>
                            <TableDashboard titleTable='clientes'/>
                        </StyledTablesDashboard>
                    </StyledContent>
                }
            </StyledMain>
        </StyledDashBoard>
    )
}