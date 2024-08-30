import React from "react";

import github from "../../assets/imgs/GitHub.png";
import instagram from "../../assets/imgs/Instagram.png";

import styles from "./Sobre.module.css";

const Ajuda = () => {
  return (
    <div>
      <div className="title">
        <h1>Sobre</h1>
      </div>

      <div className={styles.sobreContainer}>
        <h1>
          Sobre a <span>DevsDream</span>
        </h1>

        <div className={styles.creditos}>
          <p>Projeto criado por João Pedro Lourenço</p>
          <div className={styles.btnCreditos}>
            <a href="https://github.com/JoaoPedroLourenco" target="_blank">
              <img src={github} alt="" />
            </a>
            <a href="https://instagram.com/joaoo.pedrool" target="_blank">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>

        <p>
          O DevsDream é um fórum focado principalmente na área da tecnologia,
          buscando trazer esclarecimentos, feedbacks ou ideias aos projetos e/ou
          problemas dos alunos da área de tecnologia da Unimar.
        </p>

        <h2>Projeto realizado para o bootcamp Jovem Programador 2024</h2>

        <a href="https://unimar.br/" target="_blank" className="unimarBtn">
          Conheça a Unimar!
        </a>
      </div>
    </div>
  );
};

export default Ajuda;
