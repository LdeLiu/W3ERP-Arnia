import { ButtonAside } from "../ButtonAside/ButtonAside";
import { StyledAside, StyledDivButtons, StyledDivContactUs, StyledImgContactUs, StyledLogoAside } from "./style";

const buttons = [
    {
        imgSrc: "./aside/pie-two.png",
        txt: "Dashboard",
    },
    {
        imgSrc: "./aside/chart-line.png",
        txt: "Predições",
    },
    {
        imgSrc: "./aside/facial-cleanser.png",
        txt: "Produtos",
    }
]

type propsType = {
    page: string
}

export function Aside(props: propsType){
    return(
        <>
            <StyledAside>
                <StyledLogoAside src="./logoAsideDashboard.png" alt="" />
                
                <StyledDivButtons>
                    {buttons.map((button) => <ButtonAside imgSrc={button.imgSrc} txt={button.txt} page={props.page}/>)}
                </StyledDivButtons>
               
                <div className="contactus">
                    <StyledDivContactUs>
                        <StyledImgContactUs src="./aside/Saly-31.png" alt="" />
                        <p>precisando de <b>ajuda ou suporte</b> em algo?</p>
                        <button>fale conosco</button>
                    </StyledDivContactUs>
                </div>
                
            </StyledAside>
        </>
    )
}