import React from "react";
import "./SideBar.css";

import home from "../assets/imgs/home.png";
import create from "../assets/imgs/Add.png";
import sair from "../assets/imgs/sair.png";
import user from "../assets/imgs/user.png";
import ajuda from "../assets/imgs/ajuda.png";
import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/DDLogo.png";

const SideBar = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <img src={Logo} alt="" />
          <p>DevsDream</p>
        </div>
        <li>
          <NavLink to="/">
            <img src={home} alt="home" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/criarPost">
            <img src={create} alt="criar Post" />
            <p>Criar Post</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ajuda">
            <img src={ajuda} alt="ajuda" />
            <p>Ajuda</p>
          </NavLink>
        </li>
      </ul>

      <div className="perfil">
        <ul>
          <li>
            <NavLink to="/perfil">
              <img src={user} alt="perfil" />
              <p>Perfil</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
