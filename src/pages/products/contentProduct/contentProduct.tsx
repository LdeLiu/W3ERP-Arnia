import {useState, useEffect} from 'react'

import { getPrroducts } from '../../../services/produtcs';

import { Pagination } from "../../../componentes/Pagination/Pagination";
import { TableProducts } from "../../../componentes/TableProducts/TableProducts";
import { SearchBar } from "../../../componentes/searchBar/SearchBar";
import { StyledContent, StyledDivFilter, StyledDivTable } from "./styled";

import filterImg from '../../../assets/product/filter.png'
import { FilterProducts } from '../../../componentes/FilterProducts/FilterProducts';


    

type dataType = {
    content: [
       { id: number
        nome: string
        percentual: number
        classificacao: string
        }
    ]
    totalElements: number
    size: number
    totalPages: number
    numberOfElements: number
    pageable: {
        pageNumber: number
    }
}

export function ContentProduct(){

    const [currentPage, setCurrentPage] = useState(0)
    const [query, setQuery] = useState('')
    const [seeFilter, setSeeFilter] = useState('')
    const [classification, setClassification] = useState('')
    

    const [data, setData] = useState<dataType>()
    async function getData(){
        const response = await getPrroducts(currentPage,classification,query)
        setData(response)
        console.log('chamou a api, linha 42, contentProduct')
    }
    useEffect(() =>{
        getData()
    },[currentPage,query,classification])

    const chengePage = (num: number) =>{
        setCurrentPage(num - 1)
    }
    const chengeQuery = (value: string) =>{
        setQuery(value)
    }
    const chengeClassification = (clas: string) => {
        setClassification(clas)
    }
    const chengeSeeFilter = () => {
        if(!seeFilter){
            setSeeFilter('flex')
            return
        }
        setSeeFilter('')
    }
    return(
        <StyledContent>
        <h1>Produtos</h1>
        <StyledDivTable>
           <div className="search">
               <SearchBar setFilter={chengeQuery}/> 
               <button className="filter" onClick={chengeSeeFilter}><img src={filterImg} alt="" /></button>
               <StyledDivFilter>
                    <FilterProducts display={seeFilter} setDisplay={chengeSeeFilter} setClas={chengeClassification}/>
               </StyledDivFilter>
           </div>
           <TableProducts data={data}/>
           <div className="tableFooter">
               <p>{((data?.pageable.pageNumber??0) * 7) + (data?.numberOfElements??7)} de {data?.totalElements} itens</p>
               <div className="pagination">
                   <Pagination currentPage={currentPage} setPage={chengePage} maxPage={data?.totalPages}/>
               </div>
           </div>
        </StyledDivTable>
   </StyledContent>
    )
}