import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormGrupStyled, DivLoginStyled, FormLoginStyled, FormTitleStyled, InputLogin, LabelLogin, OtherButtons, TextCheckBox, ButtonFormLogin, CheckboxContainer, HiddenCheckbox, ImgShowPassword, StyledLink } from './style';
import { useNavigate } from 'react-router-dom';


type data = {
    email?: string;
    rememberMe?: boolean;
    password?: string;
}

type propsType = {
    func: (param:any) => Promise<boolean>
}

export function FormLogin({ func }: propsType) {

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<data> = async (data: data) => {
        const logged: boolean = await func(data)
        if(!logged){
            alert("formlogin-onSubmit falhou o login")
        }
        navigate('/dashboard')
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!checked);
    }

    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <DivLoginStyled>
            <div>
                <p>Seja bem vindo!</p>
                <FormTitleStyled>Realize seu Login</FormTitleStyled>
            </div>
            <FormLoginStyled>
                <FormGrupStyled error={errors.email}>
                    <LabelLogin htmlFor="">E-mail</LabelLogin>
                    <InputLogin {...register("email", { required: true })} error={errors.email} type="text" placeholder='Insira seu e-mail' />
                </FormGrupStyled>
                <FormGrupStyled error={errors.password}>
                    <LabelLogin htmlFor="">Senha</LabelLogin>
                    <InputLogin {...register("password", { required: true })} error={errors.password} type={showPassword ? 'text' : 'password'} placeholder='Insira sua senha' />
                    <ImgShowPassword onClick={handleShowPassword} src={showPassword ? './eye-regular.svg' : './eye-slash-regular.svg'} />
                </FormGrupStyled>
                <OtherButtons>
                    <CheckboxContainer onClick={handleCheckboxChange}>
                        <HiddenCheckbox {...register("rememberMe")} onChange={handleCheckboxChange} checked={checked} />
                        <TextCheckBox > Lembrar-me </TextCheckBox>
                    </CheckboxContainer>
                    <StyledLink href="">Esqueci minha senha</StyledLink>
                </OtherButtons>
                <ButtonFormLogin type="button" value="Entrar" onClick={() => handleSubmit(onSubmit)()} />
            </FormLoginStyled>
        </DivLoginStyled>
    )
}