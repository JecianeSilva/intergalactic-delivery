import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import CadastroUser from "../pages/Cadastro/cadastroUser";
import CadastroAddress from "../pages/Cadastro/cadastroAddress";
import Home from "../pages/Home/home";
import Cart from "../pages/Cart/cart";
import { Default } from "../components/Layout/default";

export function Router() {
  const isAuthenticated = true;

  return (
    <Routes>
      {isAuthenticated ?
        (
          <Route path="/" element={<Default isAuthenticated />}>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho-de-compras" element={<Cart />} />
          </Route>
        ) : (
          <Route path="/" element={<Default />}>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro-etapa1" element={<CadastroUser />} />
            <Route path="/cadastro-etapa2" element={<CadastroAddress />} />
          </Route>
        )
      }
    </Routes>
  );
}