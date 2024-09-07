import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Começa com true para indicar que está carregando

  useEffect(() => {
    const collectionRef = collection(db, docCollection);

    // Ordena os documentos pela data de criação
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setDocuments([]); // Nenhum documento encontrado
        } else {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
        setLoading(false); // Carregamento completo
      },
      (error) => {
        console.log(error);
        setError("Erro ao buscar documentos");
        setLoading(false); // Carregamento falhou
      }
    );

    // Cleanup da função onSnapshot ao desmontar o componente
    return () => unsubscribe();
  }, [docCollection]);

  return { documents, loading, error };
};
