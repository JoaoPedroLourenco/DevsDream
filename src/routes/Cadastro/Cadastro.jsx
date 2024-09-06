import { useEffect, useState } from "react";

import gitHub from "../../assets/imgs/GitHub.png";
import google from "../../assets/imgs/Google.png";

import styles from "./Cadastro.module.css";

import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

const Cadastro = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");

  const {
    criarUsuario,
    error: erroAutenticacao,
    loading,
    entrarComGoogle
  } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const usuario = {
      displayName,
      email,
      senha,
    };

    if (senha !== confirmarSenha) {
      setError("As senhas precisam ser iguais");
      return;
    }

    const response = await criarUsuario(usuario);

    console.log(response);
  };

  useEffect(() => {
    if (erroAutenticacao) {
      setError(erroAutenticacao);
    }
  }, [erroAutenticacao]);

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
           
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
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
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme sua Senha"
           
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          {!loading && (
            <div className={styles.btnCadastro}>
              <button>Cadastrar</button>
            </div>
          )}

          {loading && (
            <div className={styles.btnCadastro}>
              <button disabled>Aguarde</button>
            </div>
          )}

          <p>OU</p>

          

         
        </form>
          
        <button className={styles.btnAltConnect} onClick={entrarComGoogle}>
            <img src={google} alt="google" />
            Conectar com Google
          </button>

          <p>
            Já possui uma conta? <Link to="/login">Login</Link>
          </p>
      </div>
    </>
  );
};

export default Cadastro;
