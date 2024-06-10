import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

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

export const listFilterProduct = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Naves" },
  { id: 2, name: "Trajes espaciais" },
  { id: 3, name: "Estações espaciais" },
  { id: 4, name: "Robôts de exploração" },
  { id: 5, name: "Ferramentas" },
];

export const products = [
  {
    id: 1,
    name: "Trajes espaciais EVA",
    description: "Trajes  EVA (atividade extraveicular)",
    price: 905.50,
    categories: [0, 2],
  },
  {
    id: 2,
    name: "Trajes espaciais IVA",
    description: "Trajes  IVA (atividade intraveicular)",
    price: 605.50,
    categories: [0, 2],
  },
];