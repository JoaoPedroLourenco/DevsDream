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
          Sobre a <span>UniNetwork</span>
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
          A UniNetwork é uma rede social voltada para estudantes universitários,
          com o objetivo de promover a interação entre eles. Na plataforma, os
          usuários podem compartilhar textos e fotos relacionados à vida
          acadêmica, facilitando a troca de experiências, ideias e dicas. A
          UniNetwork cria um ambiente virtual que aproxima alunos de diferentes
          cursos e instituições, fortalecendo a comunidade universitária.
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
