import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const adicionarPost = (novoPost) => {
    setPosts((prevPosts) => [...prevPosts, novoPost]);
    navigate("/"); // Navegar para a Home após adicionar o post
  };

  return (
    <div className="App">
      <SideBar />
      <div className="container">
        {/* Passa o estado dos posts e a função para as rotas-filhas */}
        <Outlet context={{ posts, adicionarPost }} />
      </div>
    </div>
  );
}

export default App;
