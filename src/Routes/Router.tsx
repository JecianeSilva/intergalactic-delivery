import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import CadastroUser from "../pages/Cadastro/cadastroUser";
import CadastroAddress from "../pages/Cadastro/cadastroAddress";
import Home from "../pages/Home/home";
import { Default } from "../components/Layout/default";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-etapa1" element={<CadastroUser />} />
        <Route path="/cadastro-etapa2" element={<CadastroAddress />} />
      </Route>
    </Routes>
  );
}