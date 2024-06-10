
import { Topic } from "../../components/Topic/topic";
import HeroImg from "../../assets/images/bg-hero.png";

import { listTopicsHome } from "../../utils/defaults";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between max-w-6xl w-full px-4 mx-auto pt-[80px] max-md:flex-col max-md:gap-8">
        <div className="flex flex-col mr-8">
          <h1 className="font-cursive font-extrabold text-5xl text-slate-950 mb-4">
            Sistema de entrega perfeito para qualquer hora do dia
          </h1>

          <p className="font-sans text-lg text-slate-700 mt-4">
            Com o Intergalatic Delivery você recebe suas encomendas onde você quiser, de forma rápida e segura.
          </p>
          <ul
            className="text-slate-600 
            grid grid-cols-2 gap-4 mt-12
            max-[425px]:grid-cols-1"
          >
            {listTopicsHome.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </ul>
        </div>
        <img
          src={HeroImg}
          className="w-[45%] h-auto ml-8"
          alt="Copo com o nome Coffee Delivery e alguns dos ingredientes como próprio grão de café e um coador."
        />
      </div>
    </div >
  )
}

export default Home
