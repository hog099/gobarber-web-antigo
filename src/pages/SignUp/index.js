import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import {signUpRequest} from '~/store/modules/auth/actions';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um email valido!').required('O e-mail é obrigatório'),
  password: Yup.string().min(6,'No mínimo 6 caracteres').required('A senha é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();


  function handleSubmit({name, email, password}){
   dispatch(signUpRequest(name, email, password))
  }



  return (
    <>
    <img src={logo} alt="gobarber" />

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Nome Completo" />
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua Senha Secreta" />

      <button type="submit">Criar Conta</button>
      <Link to="/">Já Tenho Login</Link>
    </Form>

    </>
  );
}
