import styles from "./Home.module.css";
import user from "../../assets/imgs/ByeWind.png";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

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
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
