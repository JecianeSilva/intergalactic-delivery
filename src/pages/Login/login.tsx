
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/bg-hero.png";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  }

  return (
    <div className="flex flex-col w-screen h-full">
      <div className="flex items-end max-w-7xl mx-auto h-full max-h-[910px] px-8">
        <div className="flex flex-col justify-center max-w-[344px] w-full h-full py-16">
          <form action="#" className="flex flex-col justify-center space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="text-md font-medium text-gray-700">E-mail</label>
              <input type="email" name="e-mail" id="email" className="focus:border-blue-600 border-2 rounded-md mt-1 py-2 px-4" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" className="focus:border-blue-600 border-2 rounded-md mt-1 py-2 px-4" />
            </div>
            <button
              type="submit"
              className="bg-slate-950 text-white px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>
          <hr className="h-px my-8 bg-slate-300 border-0" />
          <div className="text-sm font-medium text-gray-700">
            Não tem cadastro?{' '}
            <a href="/cadastro-etapa1" className="text-blue-700 hover:underline dark:text-blue-500"> Crie sua conta</a>
          </div>
        </div>
        <div className="flex h-full w-full pl-16">
          <img src={HeroImg} style={{
            objectFit: "contain",
            objectPosition: "center bottom",
          }} />
        </div>
      </div>
    </div>

  )
}

export default Login
