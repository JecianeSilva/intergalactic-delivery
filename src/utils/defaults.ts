import { ShoppingCart, Timer } from "phosphor-react";
import Nave from "../assets/images/nave_millennium_falcon.webp";
import EstacaoAlpha from "../assets/images/estacao-espacial-alpha.jpg";
import TrajeEva from "../assets/images/traje_espacial_2.jpg";
import KitExample from "../assets/images/kit_ferramenta_example.jpeg";

export const listTopicsHome = [
  {
    id: 1,
    label: "Compra simples e segura",
    icon: ShoppingCart,
    bgColor: "bg-blue-600",
  },

  {
    id: 2,
    label: "Entrega rápida e rastreada",
    icon: Timer,
    bgColor: "bg-blue-600",
  },
];

export const listCategoriesProduct = [
  "Naves",
  "Trajes espaciais",
  "Estações espaciais",
  "Robôts de exploração",
  "Ferramentas",
  "Kits",
];

export const products = [
  {
    "id": 1,
    "name": "Trajes espaciais EVA",
    "description": "Trajes EVA (atividade extraveicular)",
    "image": TrajeEva,
    "price": 905.50,
    "categories": ["Trajes espaciais"]
  },
  {
    "id": 2,
    "name": "Trajes espaciais IVA",
    "description": "Trajes IVA (atividade intraveicular)",
    "image": TrajeEva,
    "price": 605.50,
    "categories": ["Trajes espaciais"]
  },
  {
    "id": 3,
    "name": "Nave Espacial Falcon",
    "description": "Nave para transporte interplanetário",
    "image": Nave,
    "price": 5500000.00,
    "categories": ["Naves"]
  },
  {
    "id": 4,
    "name": "Robô de exploração Rover",
    "description": "Robô autônomo para exploração de terrenos extraterrestres",
    "image": Nave,
    "price": 150000.00,
    "categories": ["Robôts de exploração"]
  },
  {
    "id": 5,
    "name": "Kit de ferramentas espaciais",
    "description": "Conjunto de ferramentas para reparos em ambientes sem gravidade",
    "image": KitExample,
    "price": 1200.75,
    "categories": ["Ferramentas", "Kits"]
  },
  {
    "id": 6,
    "name": "Estação Espacial Alpha",
    "description": "Estação espacial modular para habitação e pesquisa",
    "image": EstacaoAlpha,
    "price": 35000000.00,
    "categories": ["Estações espaciais"]
  },
  {
    "id": 8,
    "name": "Kit de sobrevivência espacial",
    "description": "Kit completo para emergências em missões espaciais",
    "image": KitExample,
    "price": 850.30,
    "categories": ["Kits"]
  }
];