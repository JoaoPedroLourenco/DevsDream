// imports do react
import { useState } from "react";

// estilos
import "./SideBar.css";

// imagens
import home from "../assets/imgs/home.png";
import create from "../assets/imgs/Add.png";
// import sair from "../assets/imgs/sair.png";
// import user from "../assets/imgs/user.png";
import ajuda from "../assets/imgs/ajuda.png";
import Logo from "../assets/imgs/unimar.png";
import seta from "../assets/imgs/Left Arrow.png";
// import menu from "../assets/imgs/menu.png";

// react-router-dom
import { NavLink } from "react-router-dom";

// components / routes
import Login from "../routes/Login/Login";

const SideBar = () => {
  const [hideSideBar, setHideSideBar] = useState(false);

  const [loginPopUp, setLoginPopUp] = useState(false);

  // const [showResponsiveSideBar, setShowResponsiveSideBar] = useState(false);

  const openLoginPopUp = () => {
    setLoginPopUp(!loginPopUp);
  };

  const diminuirSideBar = () => {
    setHideSideBar(!hideSideBar);
  };

  // const mostrarSideBarResponsiva = () => {
  //   setShowResponsiveSideBar(!showResponsiveSideBar);
  // };

  return (
    <>
      {/* <button
        className="btnSideBarResponsiva"
        onClick={mostrarSideBarResponsiva}
      >
        <img src={menu} alt="" />
      </button> */}
      <nav
        style={{
          width: hideSideBar ? "50px" : "300px",
        }}
      >
        <ul>
          <div className="logo">
            <div className="logoContent">
              <img src={Logo} alt="" />
              <p style={{ display: hideSideBar ? "none" : "block" }}></p>
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
          <ul>
            <li>
              <button onClick={openLoginPopUp}>
                Fazer Login
                {loginPopUp && <Login />}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
