import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/index";

export default class Home extends Component {
  render() {
    return (
      <div id="caixa3">
        <Header />
        <h2 id="titulo2">Olá, seja bem vindo à tela Home</h2>
        <br />
        <p id="texto2"> Escolha a página que você deseja acessar: </p>
        <Link to={"/music"}> Letra de Música </Link> <br />
        <br />
        <br />
        <Link to={"/aboutme"}> Sobre Mim </Link>
      </div>
    );
  }
}
