import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./routes/Home/Home.jsx";
import Sobre from "./routes/Sobre/Sobre.jsx";
import CreatePost from "./routes/CreatePost/CreatePost.jsx";
import Login from "./routes/Login/Login.jsx";

import { AuthProvider } from "./context/authContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Perfil from "./routes/Perfil/Perfil.jsx";
import Cadastro from "./routes/Cadastro/Cadastro.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/criarPost",
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
