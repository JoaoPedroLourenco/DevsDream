import styles from "./Home.module.css";
import user from "../../assets/imgs/ByeWind.png";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useState } from "react";

import like from "../../assets/imgs/like.png";

const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const [likeContador, setLikeContador] = useState(0);
  const [dislikeContador, setDislikeContador] = useState(0);
  const [btnAtivo, setBtnAtivo] = useState("none");

  const handleLike = (reacao) => {
    if (btnAtivo === "none") {
      if (reacao === "like") {
        setLikeContador(likeContador + 1);
        setBtnAtivo("like");
      } else if (reacao === "dislike") {
        setDislikeContador(dislikeContador + 1);
        setBtnAtivo("dislike");
      }
    }
    //dsaudhjsad
    //diosajdsoiad
    else if (btnAtivo === reacao) {
      if (reacao === "like") {
        setLikeContador(likeContador - 1);
      } else if (reacao === "dislike") {
        setDislikeContador(dislikeContador - 1);
      }
      setBtnAtivo("none");
    }
    // dsadsad
    else if (btnAtivo !== reacao) {
      if (reacao === "like") {
        setLikeContador(likeContador + 1);
        setDislikeContador(dislikeContador - 1);
        setBtnAtivo("like");
      } else if (reacao === "dislike") {
        setLikeContador(likeContador - 1);
        setDislikeContador(dislikeContador + 1);
        setBtnAtivo("dislike");
      }
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className="title">
        <h1>Home</h1>
      </div>

      <div className={styles.postsContainer}>
        {loading && <p>Carregando posts...</p>}

        {!loading && posts && posts.length === 0 && (
          <p>Nenhum post encontrado.</p>
        )}

        {!loading &&
          posts &&
          posts.map((post, index) => (
            <div className={styles.postCard} key={index}>
              <div className={styles.postContent}>
                <div className={styles.userName}>
                  <img src={user} alt="User avatar" />
                  <span>{post.createdBy || "Usuário Anônimo"}</span>
                </div>

                <h2>{post.postTitle}</h2>
                <p>{post.postContent}</p>

                {/* Exibe a imagem se houver uma URL associada ao post */}
                {post.postImage && (
                  <div className={styles.imageContainer}>
                    <img
                      src={post.postImage}
                      alt="Imagem do post"
                      className={styles.postImage}
                    />
                  </div>
                )}

                <div className={styles.feedBackBtns}>
                  <div className={styles.likeBtn}>
                    <button
                      onClick={() => handleLike("like")}
                      className={`btn ${
                        btnAtivo === "like" ? `${styles.likeAtivo}` : ""
                      }`}
                    >
                      <img src={like} alt="" />
                      <span>{likeContador}</span>
                    </button>
                  </div>
                  <div className={styles.dislikeBtn}>
                    <button
                      onClick={() => handleLike("dislike")}
                      className={`btn ${
                        btnAtivo === "dislike" ? `${styles.dislikeAtivo}` : ""
                      }`}
                    >
                      <img src={like} />
                      <span>{dislikeContador}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
