import React, { useState } from "react";

import styles from "./Perfil.module.css";

import userImage from "../../assets/imgs/ByeWind.png";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

const Perfil = () => {
  const { sairDaConta } = useAuthentication();

  const { user } = useAuthValue();

  const [popUp, setPopUp] = useState(false);

  const abrirPopUp = () => {
    setPopUp(true);
  };

  const fecharPopUp = () => {
    setPopUp(false);
  };

  return (
    <div>
      <div className="title">
        <h1>Perfil</h1>
      </div>

      <div className={styles.perfilContainer}>
        <div className={styles.pfp}>
          <img src={userImage} alt="foto de perfil" />
        </div>
      </div>
      <div className={styles.info}>
        <p>{user.displayName}</p>
        <p>{user.email}</p>
      </div>
      <div className={styles.logOut}>
        <button onClick={abrirPopUp} className="dangerBtn">
          Sair da conta
        </button>
      </div>
      {popUp && (
        <div className={styles.popUpLogOut}>
          <div className={styles.popUpCard}>
            <p>Certeza que deseja sair?</p>

            <div className={styles.btnsPopUp}>
              <button onClick={fecharPopUp} className={styles.cancelar}>
                Cancelar
              </button>
              <button onClick={sairDaConta} className="dangerBtn">
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;
