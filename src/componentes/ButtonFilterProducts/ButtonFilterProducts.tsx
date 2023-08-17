import { StyledButtonFilter, StyledPercentage, StyledTitle, StyledValue } from "./style";

type propsType = {
    title: string
    value: number
    percentage?: number
    background?: boolean
}

export function ButtonFilterProducts(props:propsType) {
    const isblue = props.background??false

    return(
        <StyledButtonFilter backgroundColor={isblue}>
            <StyledTitle color={isblue}>{props.title}</StyledTitle>
            <div className="info">
                <StyledValue color={isblue}>{props.value}</StyledValue>
                {props.percentage &&
                    <StyledPercentage positive={props.percentage > 0}><p>{props.percentage > 0 ? `+${props.percentage}` : props.percentage}</p></StyledPercentage>
                }
            </div>
        </StyledButtonFilter>
    )
}