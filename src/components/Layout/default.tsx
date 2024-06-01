import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}