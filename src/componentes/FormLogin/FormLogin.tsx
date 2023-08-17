import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { FormGrupStyled, DivLoginStyled, FormLoginStyled, FormTitleStyled, InputLogin, LabelLogin, OtherButtons, TextCheckBox, ButtonFormLogin, CheckboxContainer, HiddenCheckbox, ImgShowPassword, StyledLink } from './style';
import eyeImg from '../../assets/eye-regular.svg'
import eyeSlashImg from '../../assets/eye-slash-regular.svg'

type data = {
    email?: string;
    rememberMe?: boolean;
    password?: string;
}

type propsType = {
    func: (param:any) => Promise<void> | Promise<boolean>
}

export function FormLogin({ func }: propsType) {

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<data> = async (data: data) => {
        await func(data)
        if(!localStorage.getItem('TOKEN')){
            alert("E-mail ou senha incorreto!")
            return
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
                    <InputLogin required {...register("email", { required: true })} error={errors.email} type="text" placeholder={errors.email ? "Preencha este campo" : "Insira seu e-mail"} />
                </FormGrupStyled>
                <FormGrupStyled error={errors.password}>
                    <LabelLogin htmlFor="">Senha</LabelLogin>
                    <InputLogin required {...register("password", { required: true })} error={errors.password} type={showPassword ? 'text' : 'password'} placeholder={errors.email ? "Preencha este campo" : "Insira sua senha"} />
                    <ImgShowPassword onClick={handleShowPassword} src={showPassword ? `${eyeImg}` : `${eyeSlashImg}`} />
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