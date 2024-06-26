import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import { Router } from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartContextProvider } from "./contexts/Cart/CartContext";
import { UserContextProvider } from "./contexts/User/UserContext";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastContainer autoClose={2000} position="bottom-right" />
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
