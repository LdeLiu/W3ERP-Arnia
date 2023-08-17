import {styled} from 'styled-components'

export const StyledDivFilter = styled.div<{display: string}>`
    display: ${props => props.display ? props.display : "none"};
    flex-direction: column;
    
    padding: 1rem;
    gap: 1rem;

    width: 15rem;
    height: 15rem;

    box-shadow: 0px 1px 7px  rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    .status{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        p{
                font-size: 0.8rem;
            }
        div{
            display: flex;
            justify-content: space-between;
        }
        .check{
            display: flex;
            position: relative;
        }
    }
    .apply{
        background-color: #001C98;
        width: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 0.8rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

    .radio-input {
    display: none;
    }
    .radio-label {
    display: inline-block;
    padding: 5px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
    }
    .radio-input:checked + .radio-label {
    background-color: #004CE8;
    color: #fff;
    border-color: #3498db;
    }
    .radio-label:after{
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 3px;
        height: 7px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .radio-input:checked + .radio-label:after{
        display: block;
    }


`
