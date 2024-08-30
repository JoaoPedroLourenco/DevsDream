import React from "react";

import styles from "./Home.module.css";
import user from "../../assets/imgs/user.png";

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
                adipisicing elit. Fugit maiores omnis eos repellat optio officia
                labore quis amet odit dicta ipsa esse, magnam ut tempora aliquid
                adipisci iusto iure autem? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Dolorum dolorem maxime, eligendi
                sed architecto ut maiores tempora? Adipisci doloribus fuga a
                iusto impedit porro eveniet doloremque laborum animi ipsam.
                Repellat! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Harum itaque sapiente amet aliquid ipsam dolorum magni
                impedit sequi. Cupiditate ex corrupti illo rerum veniam suscipit
                alias expedita eveniet omnis libero!
              </p>
            </div>

            <div className={styles.postTags}>
              <p>JS, FrontEnd, woow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
