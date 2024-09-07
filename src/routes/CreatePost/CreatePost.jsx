import { useState } from "react";
import styles from "../CreatePost/CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState(null);
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const { user } = useAuthValue();

  const { inserirDocumento, response } = useInsertDocument("posts");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    // Insere o documento com a imagem
    await inserirDocumento(
      {
        postTitle,
        postContent,
        uid: user.uid,
        createdBy: user.displayName,
      },
      file // Passa o arquivo de imagem para ser carregado no Storage
    );

    navigate("/"); // Voltar para a página principal após o envio
  };

  function previewImagem(e) {
    const arquivoSelecionado = e.target.files[0];
    setFile(arquivoSelecionado); // Armazena o arquivo de imagem
  }

  return (
    <div className={styles.criarPost}>
      <div className="title">
        <h1>Criar Post</h1>
      </div>

      <div className={styles.formCreatePostContainer}>
        <form onSubmit={handleSubmit}>
          <label>
            Título do Post
            <input
              type="text"
              name="postTitle"
              autoComplete="off"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Conteúdo do Post
            <textarea
              name="postContent"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              maxLength="240"
              required
            ></textarea>
          </label>

          <div className={styles.imageUpload}>
            <label>
              Compartilhe uma imagem
              <input type="file" name="postImage" onChange={previewImagem} />
            </label>

            {file && (
              <label>
                Preview da imagem
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview da imagem do post"
                />
              </label>
            )}
          </div>

          {!response.loading && <button>Postar</button>}

          {response.loading && <button disabled>Aguarde</button>}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
