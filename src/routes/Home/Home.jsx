import styles from "./Home.module.css";
import user from "../../assets/imgs/user.png";
import imagemPost from "../../assets/imgs/pexels-photo-577585.webp";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { posts } = useOutletContext(); // Recupera os posts do contexto

  return (
    <div className={styles.homeContainer}>
      <div className="title">
        <h1>Home</h1>
      </div>

      <div className={styles.postsContainer}>
        {posts.map((post, index) => (
          <div className={styles.postCard} key={index}>
            <div className={styles.postContent}>
              <div className={styles.postText}>
                <div className={styles.userName}>
                  <img src={user} alt="User avatar" />
                  <span>João Pedro L.</span>
                </div>
                <h2>{post.postTitle}</h2>
                <p>{post.postContent}</p>
                {post.postImage && <img src={post.postImage} alt="Post" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
