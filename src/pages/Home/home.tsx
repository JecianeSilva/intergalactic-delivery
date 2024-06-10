import { Tag } from "../../components/Tag/tag";
import { Topic } from "../../components/Topic/topic";
import { ProductCard, ProductProps } from "../../components/ProductCard/ProductCard";

import { useCart } from "../../contexts/Cart/CartContext";

import HeroImg from "../../assets/images/bg-hero.png";

import { listCategoriesProduct, listTopicsHome, products } from "../../utils/defaults";

function Home() {
  const { categoriesProductsSelected, onUpdateCategoriesProductsSelected } = useCart();

  let productsFilter: ProductProps[] = [];

  products.forEach((product) => {
    if (categoriesProductsSelected.length === 0) {
      productsFilter = [...products];
    } else {
      categoriesProductsSelected?.forEach((category) => {
        if (product.categories.includes(category)) {
          productsFilter.push(product);
        }
      });
    }
  });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between max-w-6xl w-full px-4 mx-auto pt-[80px] max-md:flex-col max-md:gap-8">
        <div className="flex flex-col mr-8">
          <h1 className="leading-[3.75rem] font-extrabold text-5xl text-slate-950 mb-4">
            Sistema de entrega perfeito para qualquer hora do dia
          </h1>

          <p className="font-sans text-lg text-slate-700 mt-4">
            Com o Intergalatic Delivery você recebe suas encomendas onde você quiser, de forma rápida e segura.
          </p>
          <ul
            className="text-slate-600 
            grid grid-cols-2 gap-3 mt-12
            max-[625px]:grid-cols-1"
          >
            {listTopicsHome.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </ul>
        </div>
        <img
          src={HeroImg}
          className="w-[45%] h-auto ml-8"
          alt=""
        />
      </div>

      <div className="flex max-w-6xl w-full px-4 mx-auto pb-[80px] max-md:flex-col max-md:gap-8">
        <div className="flex w-full flex-col justify-between mb-14 max-md:flex-col max-md:items-start">
          <h2 className="font-extrabold text-2xl mb-8 text-slate-900">
            Nossos produtos
          </h2>
          <div className="flex w-full items-center gap-2 flex-wrap">
            {listCategoriesProduct.map((typeProduct) => {
              const isSelectedTag = categoriesProductsSelected?.includes(typeProduct);
              return (
                <Tag
                  key={typeProduct}
                  variant="outline"
                  asChild
                  isSelected={isSelectedTag}
                >
                  <div
                    onClick={() => onUpdateCategoriesProductsSelected(typeProduct)}
                  >
                    {typeProduct}
                  </div>
                </Tag>
              );
            })}
          </div>

          <div className="w-full grid mt-10 gap-8 grid-cols-grid-responsive">
            {productsFilter.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
