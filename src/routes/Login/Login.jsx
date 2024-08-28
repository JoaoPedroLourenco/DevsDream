import React, { useState } from "react";
import Logo from "../../assets/imgs/Logo.png";
import gitHub from "../../assets/imgs/GitHub.png";
import google from "../../assets/imgs/Google.png";
import "./Login.css";

const Login = () => {
  // consumir estado do email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função executada no submit do form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="containerFormLogin">
        <div className="logo">
          <img src={Logo} alt="" />
          <p>DevsDream</p>
        </div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />{" "}
          {/* Pega o valor do input e passa para o state */}
          <button className="btn-login">Entrar</button>
          <p>OU</p>
          <button className="btn-altLogin">
            <img src={google} alt="" />
            Conectar com Google
          </button>
          <button className="btn-altLogin">
            <img src={gitHub} alt="" />
            Conectar com GitHub
          </button>
          <p>Não possui conta? Cadastre-se!</p>
        </form>
      </div>
      <div className="lado-esq-login">
        <div className="circle"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default Login;
