import React from "react";

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

        <p>
          O DevsDream é um fórum focado principalmente na área da tecnologia,
          buscando trazer esclarecimentos, feedbacks ou ideias aos projetos e/ou
          problemas dos alunos da área de tecnologia da Unimar.
        </p>

        <h2>Projeto realizado para o bootcamp Jovem Programador 2024</h2>

        <a href="https://unimar.br/" target="_blank">
          Conheça a Unimar!
        </a>
      </div>
    </div>
  );
};

export default Ajuda;
