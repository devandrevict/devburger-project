import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { Link, useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import LoginImg from '../../assets/background.svg'
import Logo from '../../assets/logo2.png'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'


import {
  Container,
  LoginImage,
  Label,
  Input,
  SignInLink,
  ContainerItens
} from './styles'

export function Login() {

  const history = useHistory()

  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido.").required("O e-mail é obrigatório."),
    password: Yup.string().required("A senha é obrigatória.").min(8, "A senha necessita de pelo menos 8 digitos.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)!',
        error: 'Verifique seus dados'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000);


  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input type="password" placeholder="Password" {...register("password")} error={errors.email?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>


          <Button type="submit" style={{
            marginTop: 60,
            marginBottom: 25
          }}>Sign In</Button>
        </form>

        <SignInLink>Não possui conta? <Link style={{ color: 'white' }} to="/cadastro">Clique aqui!</Link></SignInLink>
      </ContainerItens>
    </Container>
  )
}

