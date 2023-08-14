import { SubmitHandler, useForm } from 'react-hook-form'

import { StyledButtonSearch, StyledDivSearch, StyledInputSearch } from "./style";

import searchImg from '../../assets/searchbar/search.png'

type propsType ={
    setFilter: (filter: string) => void
}
type dataType = {
    filter?: string
}

export function SearchBar({setFilter}:propsType){

    const { register, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<dataType> = (data: dataType) => {
        setFilter(data.filter??'')
    }

    return(
        <StyledDivSearch>
            <StyledInputSearch {...register("filter")} placeholder="Pesquise uma palavra-chave"/>
            <StyledButtonSearch onClick={() => handleSubmit(onSubmit)()}>
                <img src={searchImg} alt="" />
            </StyledButtonSearch>
        </StyledDivSearch>
    )
}