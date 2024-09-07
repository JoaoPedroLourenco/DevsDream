// imports do react
import { useState } from "react";

// estilos
import "./SideBar.css";

// imagens
import home from "../assets/imgs/home.png";
import create from "../assets/imgs/Add.png";
// import sair from "../assets/imgs/sair.png";
import userImage from "../assets/imgs/user.png";
import ajuda from "../assets/imgs/ajuda.png";
import Logo from "../assets/imgs/Logo.png";
import seta from "../assets/imgs/Left Arrow.png";
import login from "../assets/imgs/Enter.png";
import newUser from "../assets/imgs/cadastro.png";
// import menu from "../assets/imgs/menu.png";

// react-router-dom
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

const SideBar = () => {
  const { user } = useAuthValue();

  const [hideSideBar, setHideSideBar] = useState(false);

  const diminuirSideBar = () => {
    setHideSideBar(!hideSideBar);
  };

  return (
    <>
      <nav
        style={{
          width: hideSideBar ? "50px" : "300px",
        }}
      >
        <ul>
          <div className="logo">
            <div className="logoContent">
              <img src={Logo} alt="" />
              <p style={{ display: hideSideBar ? "none" : "block" }}>
                UniNetwork
              </p>
            </div>
            <div className="seta">
              <button
                onClick={diminuirSideBar}
                style={{
                  rotate: hideSideBar ? "180deg" : "0deg", // girar seta ao clicar
                  transition: ".5s",
                }}
              >
                <img src={seta} alt="seta" />
              </button>
            </div>
          </div>
          <li>
            <NavLink to="/">
              <img src={home} alt="home" />
              <p style={{ display: hideSideBar ? "none" : "block" }}>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/criarPost">
              <img src={create} alt="criar Post" />
              <p style={{ display: hideSideBar ? "none" : "block" }}>
                Criar Post
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre">
              <img src={ajuda} alt="sobre" />
              <p style={{ display: hideSideBar ? "none" : "block" }}>Sobre</p>
            </NavLink>
          </li>
        </ul>
        <div className="perfil">
          {user && (
            <ul>
              <li>
                <NavLink to="/perfil">
                  <img src={userImage} alt="login" />
                  <p style={{ display: hideSideBar ? "none" : "block" }}>
                    Perfil
                  </p>
                </NavLink>
              </li>
            </ul>
          )}
          {!user && (
            <ul>
              <li>
                <NavLink to="/login">
                  <img src={login} alt="login" />
                  <p style={{ display: hideSideBar ? "none" : "block" }}>
                    Login
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro">
                  <img src={newUser} alt="cadastrar-se" />
                  <p style={{ display: hideSideBar ? "none" : "block" }}>
                    Cadastre-se
                  </p>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
