import { ButtonAside } from "../ButtonAside/ButtonAside";
import { StyledAside, StyledDivButtons, StyledDivContactUs, StyledImgContactUs, StyledLogoAside } from "./style";
import logo from '../../assets/logoAsideDashboard.png'
import contactUsImg from '../../assets/aside/Saly-31.png'


const buttons = ["Dashboard","Predições","Produtos"]

type propsType = {
    page: string
}

export function Aside(props: propsType){
    return(
    
            <StyledAside>
                <StyledLogoAside src={logo} alt="" />
                
                <StyledDivButtons>
                    {buttons.map((button,index) => <ButtonAside key={index} txt={button} page={props.page}/>)}
                </StyledDivButtons>
               
                <div className="contactus">
                    <StyledDivContactUs>
                        <StyledImgContactUs src={contactUsImg} alt="" />
                        <p>precisando de <b>ajuda ou suporte</b> em algo?</p>
                        <button>fale conosco</button>
                    </StyledDivContactUs>
                </div>
                
            </StyledAside>
        
    )
}