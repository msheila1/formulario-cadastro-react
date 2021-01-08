import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import  { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro onSubmit={formCadastro} ValidacaoCpf={ValidacaoCpf}/>
      </Container>
    );  
  }
}

function formCadastro(dados){
  console.log(dados);
}

function ValidacaoCpf(cpf){
  if(cpf.length !==11){
    return {valido: false, texto: "CPF deve ter 11 digitos."}
  }else{
    return {valido: true, texto: ""}
  }
}

export default App;