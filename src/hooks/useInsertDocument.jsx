import { useState, useEffect, useReducer } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const estadoInicial = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, estadoInicial);

  const [cancelado, setCancelado] = useState(false);

  const checarCanceladoAntesDoDispatch = (action) => {
    if (!cancelado) {
      dispatch(action);
    }
  };

  const inserirDocumento = async (document, file) => {
    checarCanceladoAntesDoDispatch({
      type: "LOADING",
    });

    try {
      let imageURL = "";

      // Se houver uma imagem, faça o upload para o Storage
      if (file) {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, file);

        // Obtenha a URL de download da imagem
        imageURL = await getDownloadURL(uploadTask.ref);
      }

      // Adiciona o documento ao Firestore com a URL da imagem
      const novoDocumento = {
        ...document,
        postImage: imageURL,
        createdAt: Timestamp.now(),
      };

      const documentoInserido = await addDoc(
        collection(db, docCollection),
        novoDocumento
      );

      checarCanceladoAntesDoDispatch({
        type: "INSERTED_DOC",
        payload: documentoInserido,
      });
    } catch (error) {
      checarCanceladoAntesDoDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelado(true);
  }, []);

  return { inserirDocumento, response };
};
