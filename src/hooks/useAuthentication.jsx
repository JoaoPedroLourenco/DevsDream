import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // lidando com vazamento de memória
  const [cancelado, setCancelado] = useState(false);

  const auth = getAuth();

  // usado para não deixar "resquícios" de funções usadas
  function checarSeFoiCancelado() {
    if (cancelado) {
      return;
    }
  }

  const criarUsuario = async (data) => {
    checarSeFoiCancelado();
    setLoading(true);
    setError(null);

    try {
      const { usuario } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.senha
      );

      // é preciso atualizar o perfil adicionando o nome de display
      // o firebase permite que crie contas com email e senha apenas
      await updateProfile(usuario, {
        displayName: data.displayName,
      });

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let mensagemErroDoSistema;

      if (error.message.includes("Password")) {
        mensagemErroDoSistema = "A senha precisa ter pelo menos 6 caractéres!";
      } else if (error.message.includes("email-already")) {
        mensagemErroDoSistema = "E-mail já cadastrado.";
      } else {
        mensagemErroDoSistema = "Ocorreu um erro, tente novamente mais tarde";
      }

      setLoading(false);
      setError(mensagemErroDoSistema);
    }
  };

  useEffect(() => {
    return () => setCancelado(true);
  }, []);

  return {
    auth,
    criarUsuario,
    error,
    loading,
  };
};
