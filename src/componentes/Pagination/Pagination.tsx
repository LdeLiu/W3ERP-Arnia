import { StyledButtonArrow, StyledButtonPag, StyledPaginationDiv } from "./style";

import lArrowImg from '../../assets/product/left.png'
import rArrowImg from '../../assets/product/right.png'
import { useEffect, useState } from "react";

type propsType = {
    setPage: (num:number) => void
    currentPage: number
    maxPage?: number
}

export function Pagination(props: propsType){

    const maxPage = props.maxPage??10
    const pagNum = props.currentPage + 1
    const [arrayPag, setArrayPag] = useState([1])

    const chengePage = () => {
        if(pagNum < 3){
            setArrayPag([1,2,3,4,5])
        }
        if(pagNum >= 3 && pagNum < (maxPage -1)){
            setArrayPag(new Array(pagNum - 2, pagNum - 1, pagNum , pagNum + 1 , pagNum + 2))
        }
        if(pagNum > (maxPage - 2)){
            setArrayPag(new Array(maxPage - 4, maxPage - 3, maxPage - 2 , maxPage -1 , maxPage))
        }
        if(maxPage <= 5){
            let newArray = []
            for(let i = 1; i <= maxPage; i++){
                newArray.push(i)
            }
            setArrayPag(newArray)
        }
    }
    useEffect(()=>{
        chengePage()
    },[pagNum,maxPage])
    useEffect(()=>{
        props.setPage(1)
    },[maxPage])
   

    const nextPage = () => {
        if(pagNum >= maxPage){
            return
        }
        props.setPage(pagNum + 1)
    }
    const prevPage = () => {
        if(pagNum <= 1){
            return
        }
        props.setPage(pagNum - 1)
    }


    return(
        <StyledPaginationDiv>
            <StyledButtonArrow onClick={prevPage}>
                <img src={lArrowImg} alt="" />
            </StyledButtonArrow>
            <div className="pagNum">
                {arrayPag.map((num,i)=>{
                    return(
                        <StyledButtonPag key={i} selected={(num === pagNum)} onClick={()=>{props.setPage(num)}}>{num}</StyledButtonPag>
                    )
                })}
            </div>
            <StyledButtonArrow onClick={nextPage}>
                <img src={rArrowImg} alt="" />
            </StyledButtonArrow>
        </StyledPaginationDiv>
    )
}