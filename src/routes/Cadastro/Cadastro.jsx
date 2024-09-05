import { useState } from "react";

import gitHub from "../../assets/imgs/GitHub.png";
import google from "../../assets/imgs/Google.png";

import styles from "./Cadastro.module.css";

import { Link } from "react-router-dom";

const Cadastro = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setError("As senhas precisam ser Iguais");
    }
  };

  return (
    <>
      <div className="title">
        <h1>Cadastro</h1>
      </div>
      <div className={styles.cadastroContainer}>
        <form onSubmit={handleSubmit}>
          {error && <div className={styles.error}>{error}</div>}

          <input
            type="text"
            name="displayName"
            placeholder="Insira o nome que deseja"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Insira seu E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            placeholder="Insira sua Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme sua Senha"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <div className={styles.btnCadastro}>
            <button>Entrar</button>
          </div>

          <p>OU</p>

          <button className={styles.btnAltConnect}>
            <img src={google} alt="google" />
            Conectar com Google
          </button>
          <button className={styles.btnAltConnect}>
            <img src={gitHub} alt="gitHub" />
            Conectar com GitHub
          </button>

          <p>
            Já possui uma conta? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
