import { Outlet } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
