import { useState } from "react";

import styles from "../CreatePost/CreatePost.module.css";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(postTitle);
    console.log(postContent);
    console.log(postImage);
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
            />
          </label>

          <label>
            Conteúdo do Post
            <textarea
              name="postContent"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              maxLength="240"
            ></textarea>
          </label>

          <label>
            Compartilhe uma imagem
            {/* o .files cria um array e colocando o índice 0 informa que o valor que queremos é a primeira imagem */}
            <input type="file" name="postImage" value={postImage} onChange={(e) => setPostImage(e.target.files[0])} />
          </label>

          <button>Criar Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
