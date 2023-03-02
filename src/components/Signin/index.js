import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>MMPcoder</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Entre em sua conta</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Senha</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Entrar</FormButton>
                    <Text>Esqueceu a senha</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn