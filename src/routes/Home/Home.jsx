import styles from "./Home.module.css";
import user from "../../assets/imgs/user.png";

import imagemPost from "../../assets/imgs/pexels-photo-577585.webp";

import SideBar from "../../components/SideBar";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className="title">
        <h1>Home</h1>
      </div>

      <div className={styles.postsContainer}>
        <div className={styles.postCard}>
          <div className={styles.postContent}>
            <div className={styles.postText}>
              <div className={styles.userName}>
                <img src={user} alt="" />
                <p>João Pedro L.</p>
              </div>
              <h2>Título do Post muito foda woow</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus beatae adipisci aliquid odit, nemo fugit nostrum,
                voluptatibus sed architecto quisquam numquam deleniti, fugiat
                molestiae!Lorem Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>

              <img src={imagemPost} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.postCard}>
          <div className={styles.postContent}>
            <div className={styles.postText}>
              <div className={styles.userName}>
                <img src={user} alt="" />
                <p>João Pedro L.</p>
              </div>
              <h2>Título do Post muito foda woow</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus beatae adipisci aliquid odit, nemo fugit nostrum,
                voluptatibus sed architecto quisquam numquam deleniti, fugiat
                molestiae!Lorem Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>

              <img src={imagemPost} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
