import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { Outlet } from "react-router-dom";

export function Default({ isAuthenticated = false }) {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
    </>
  );
}