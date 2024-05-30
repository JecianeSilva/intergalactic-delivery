import "./styles/global.css";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";

import HeroImg from "./assets/images/bg-hero.png";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header></Header>
      <div className="flex">
        <div className="flex flex-col max-w-[500px] h-screen p-8">
          <button
            disabled
            className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="bottom-0 h-full">
        <img src={HeroImg} />
      </div>
      <Footer></Footer>
    </div>

  )
}

export default App
