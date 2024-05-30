
import { Header } from "../../components/Header/header";
import HeroImg from "../../assets/images/bg-hero.png";
import { Footer } from "../../components/Footer/footer";

function Login() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex items-end max-w-7xl mx-auto h-full max-h-[910px] px-8">
        <div className="flex flex-col justify-center max-w-[344px] w-full h-full mr-16">
          <form action="" className="flex flex-col justify-center ">
            <div className="flex flex-col mb-2">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="e-mail" id="email" className="focus:border-blue-600 border-2 rounded-md mt-1 py-2 px-4" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" className="focus:border-blue-600 border-2 rounded-md mt-1 py-2 px-4" />
            </div>
            <button
              className="bg-slate-950 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>
          <hr className="h-px my-8 bg-slate-300 border-0" />
          <button
            // href="/cadastro"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cadastre-se
          </button>
        </div>
        <div className="flex h-full w-full">
          <img src={HeroImg} style={{
            objectFit: "contain",
            objectPosition: "center bottom",
          }} />
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>

  )
}

export default Login
