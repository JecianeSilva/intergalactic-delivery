import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import Cadastro from "../pages/Cadastro/cadastro";
import Home from "../pages/Home/home";
import { Default } from "../components/Layout/default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}