import { useState, useEffect } from 'react'

import { getPredictions } from '../../../services/predictions';

import { CardPrediction } from "../../../componentes/cardPrediction/CardPrediction";
import { SearchBar } from "../../../componentes/searchBar/SearchBar";
import { StyledContent,StyledPredictionsDiv, StyledSearchDiv } from "./style";

export function ContentPredictions(){

    const [filter, setFilter] = useState('')
    const chengeFilter = (value:string) => {
        setFilter(value)
    }

    const [data,setData] = useState([])
    useEffect(() => {
        getCardData()
    },[filter])

    async function getCardData () {
        const response = await getPredictions(filter)
        setData(response)
    }

    return(
        <StyledContent>
                <h1>Predições</h1>
                <StyledSearchDiv>
                    <SearchBar setFilter={chengeFilter}/>
                </StyledSearchDiv>
                <StyledPredictionsDiv>
                {data.map((data,i) => {
                    return(
                        <CardPrediction key={i} data={data}/>
                    )
                })}
                </StyledPredictionsDiv>
        </StyledContent>
    )
}