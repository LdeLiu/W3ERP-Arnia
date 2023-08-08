import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { StyledDivVariation, StyledProgressBar } from "./style";

type propsType = {
    text: string
    percentage: number
    value: number
    variation: number
}

export function ProgressBar (props: propsType) {

    const isPositive = props.variation >= 0

    return(
        <StyledProgressBar>
            <div className='divCircularPB'>
                <CircularProgressbar value={props.percentage} text={`${props.percentage}%`} />
            </div>
            <div className='details'>
                <p>{props.text}</p>
                <div>
                    <p className='value'>{props.value}</p>
                    <StyledDivVariation bg={isPositive}>
                        <p>{isPositive ? "+" : ""}{props.variation}%</p>
                    </StyledDivVariation>
                </div>
            </div>
        </StyledProgressBar>
    )
}