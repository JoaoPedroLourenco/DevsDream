import React, { useState } from "react";
import Logo from "../../assets/imgs/Logo.png";
import gitHub from "../../assets/imgs/GitHub.png";
import google from "../../assets/imgs/Google.png";
import styles from "./Login.module.css";

const Login = () => {
  // consumir estado do email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [fecharPopUp, setFecharPopUp] = useState(false);

  // função executada no submit do form para evitar a atualização da página
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // evitar fechamento do Pop Up ao clicar no form ou os itens dentro do form
  // é possível fechar o pop up clicando fora do form
  const evitarFechamento = (e) => {
    e.stopPropagation();
  };

  // usado para o botão "cancelar" do form, para fechar o pop up
  // é possível fechar o pop up clicando fora do form
  const fecharPopUpLogin = () => {
    setFecharPopUp(!fecharPopUp);
  };

  return (
    <div
      className={styles.loginContainer}
      style={{ display: fecharPopUp ? "none" : "flex" }}
    >
      <form onSubmit={handleSubmit} onClick={evitarFechamento}>
        <div className={styles.logo}>
          <img src={Logo} alt="DevsDream" />
          <p>DevsDream</p>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Insira seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="senha"
          placeholder="Insira sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className={styles.btnsLogin}>
          <button onClick={fecharPopUpLogin} className={styles.btnCancelar}>
            Cancelar
          </button>
          <button>Entrar</button>
        </div>

        <p>OU</p>

        <button className={styles.btnAltLogin}>
          <img src={google} alt="google" />
          Conectar com Google
        </button>
        <button className={styles.btnAltLogin}>
          <img src={gitHub} alt="gitHub" />
          Conectar com GitHub
        </button>

        <p>Não possui uma conta? Cadastre-se.</p>
      </form>
    </div>
  );
};

export default Login;
