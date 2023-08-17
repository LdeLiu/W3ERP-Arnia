import { SubmitHandler, useForm } from 'react-hook-form'

import { StyledDivFilter } from "./style";

type propsType = {
    display: string
    setClas: (clas: string) => void
    setDisplay: () => void
}
type filterDataType = {
    radio: string
}

export function FilterProducts(props: propsType){


    const form = useForm({
        defaultValues: {
          radio: ""
        },
        mode: "onChange"
      });
    const { register, handleSubmit } = form;
    const onSubmit: SubmitHandler<filterDataType> = async (data: filterDataType) => {
        props.setClas(data.radio)
        props.setDisplay()
    }



    return(
        <StyledDivFilter display={props.display}>
            <div>
                <h4>Filtrar por:</h4>
            </div>
            <hr />
            <p>Status</p>
            <div className="status">
                <div>
                    <div className="check">
                        <input  value={''} type="radio"  id="all"  className="radio-input" {...register('radio')}/>
                        <label htmlFor="all" className="radio-label"></label>
                        <p>Todos</p>
                    </div>
                    <p>120</p>
                </div>

                <div>
                    <div className="check"> 
                        <input  value={'EM_ALTA'} type="radio"  id="high" className="radio-input" {...register('radio')}/>
                        <label htmlFor="high" className="radio-label"></label>
                        <p>Em alta</p>
                    </div>
                    <p>80</p>
                </div>

                <div>
                    <div className="check">
                        <input  value={'EM_BAIXA'} type="radio"  id="low" className="radio-input" {...register('radio')}/>
                        <label htmlFor="low" className="radio-label"></label>
                        <p>Em baixa</p>
                    </div>
                    <p>20</p>
                </div>

            </div>
            <button className="apply" onClick={() => handleSubmit(onSubmit)()}>Aplicar</button>
        </StyledDivFilter>
    )
}