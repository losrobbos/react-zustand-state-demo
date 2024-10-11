import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

function App() {

  return (
    <>
      <nav>
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/todos"}>Todos</NavLink>
      </nav>
      <h1>Zustand Demo</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
