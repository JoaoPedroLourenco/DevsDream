import React, { useState } from "react";

import styles from "../CreatePost/CreatePost.module.css";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postTags, setPostTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(postTitle);
    console.log(postContent);
    console.log(postTags);
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
            ></textarea>
          </label>

          <label>
            Tags do post
            <input
              type="text"
              name="postTags"
              value={postTags}
              onChange={(e) => setPostTags(e.target.value)}
            />
          </label>

          <button>Criar Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
