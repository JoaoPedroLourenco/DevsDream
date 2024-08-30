import React, { useState } from "react";
import Logo from "../../assets/imgs/Logo.png";
import gitHub from "../../assets/imgs/GitHub.png";
import google from "../../assets/imgs/Google.png";
import styles from "./Login.module.css";

const Login = () => {
  // consumir estado do email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [closePopUp, setClosePopUp] = useState(false);

  // função executada no submit do form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const evitarFechamento = (e) => {
    e.stopPropagation();
  };

  const fecharPopUp = () => {
    setClosePopUp(!closePopUp);
  };

  return (
    <div
      className={styles.loginContainer}
      onClick={evitarFechamento}
      style={{ display: closePopUp ? "none" : "flex" }}
    >
      <form onSubmit={handleSubmit}>
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
          <button onClick={fecharPopUp} className={styles.btnCancelar}>
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
