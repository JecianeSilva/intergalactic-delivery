import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import Cadastro from "../pages/Cadastro/cadastro";
import Home from "../pages/Home/home";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}