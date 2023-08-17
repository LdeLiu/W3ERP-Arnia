import { StyledButtonFilter, StyledPercentage, StyledTitle, StyledValue } from "./style";

type propsType = {
    title: string
    value: number
    percentage?: number
}

export function ButtonFilterProducts(props:propsType) {

    return(
        <StyledButtonFilter selected={true}>
            <StyledTitle selected={true}>{props.title}</StyledTitle>
            <div className="info">
                <StyledValue selected={true}>{props.value}</StyledValue>
                {props.percentage &&
                    <StyledPercentage positive={props.percentage > 0}><p>{props.percentage > 0 ? `+${props.percentage}` : props.percentage}</p></StyledPercentage>
                }
            </div>
        </StyledButtonFilter>
    )
}