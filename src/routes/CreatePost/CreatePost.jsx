import { useState } from "react";
import styles from "../CreatePost/CreatePost.module.css";
import { useOutletContext } from "react-router-dom";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState(null);

  const { adicionarPost } = useOutletContext(); // Recupera a função adicionarPost

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoPost = {
      postTitle,
      postContent,
      postImage: file, // URL da imagem gerada para preview
    };

    // Chama a função adicionarPost
    adicionarPost(novoPost);
  };

  const previewImagem = (e) => {
    const arquivoSelecionado = e.target.files[0];
    setFile(URL.createObjectURL(arquivoSelecionado)); // Preview da imagem
  };

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
                <img src={file} alt="Preview da imagem do post" />
              </label>
            )}
          </div>

          <button type="submit">Criar Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
