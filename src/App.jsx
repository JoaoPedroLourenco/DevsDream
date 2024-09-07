// import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication.jsx";

import Perfil from "./routes/Perfil/Perfil.jsx";
import Cadastro from "./routes/Cadastro/Cadastro.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import Home from "./routes/Home/Home.jsx";
import Sobre from "./routes/Sobre/Sobre.jsx";
import CreatePost from "./routes/CreatePost/CreatePost.jsx";
import Login from "./routes/Login/Login.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  const adicionarPost = (novoPost) => {
    setPosts((prevPosts) => [novoPost, ...prevPosts]);
  };

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  // atribuo o valor do loadingUser com o valor do usuário comparado à undefined
  // vai fazer não exibir nada antes do usuário ser carregado
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <div className="loading">
        <div className="bouncing-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <SideBar />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home posts={posts} adicionarPost={adicionarPost} />}
              />
              <Route path="/*" element={<ErrorPage />} />
              <Route
                path="/criarPost"
                element={
                  user ? (
                    <CreatePost posts={posts} adicionarPost={adicionarPost} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="/sobre" element={<Sobre />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />} //se o usuário estiver logado não tera acesso à página de login
              />
              <Route
                path="/cadastro"
                element={!user ? <Cadastro /> : <Navigate to="/" />}
              />
              <Route
                path="/perfil"
                element={user ? <Perfil /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
