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
      <section className="flex justify-between max-w-6xl w-full px-4 mx-auto pt-[100px] pb-0 max-md:flex-col max-md:gap-8 max-md:items-center max-md:pt-[40px]">
        <div className="flex flex-col mr-8 max-md:mr-0">
          <h1 className="leading-[3.75rem] font-extrabold text-5xl text-slate-950 mb-4 max-[900px]:text-4xl max-md:text-5xl max-md:text-center max-[600px]:text-3xl">
            Sistema de entrega perfeito para qualquer hora do dia
          </h1>

          <p className="text-lg w-[80%] text-gray-500 my-4 max-md:text-center max-[600px]:text-sm">
            Com o Intergalatic Delivery você recebe suas encomendas onde você quiser, de forma rápida e segura.
          </p>
          <ul
            className="text-blue-600 
            flex flex-col gap-8 mt-12
            max-[600px]:grid-cols-1"
          >
            {listTopicsHome.map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
          </ul>
        </div>
        <img
          src={HeroImg}
          className="w-[50%] h-auto mt-12 ml-8  max-md:ml-0  max-md:w-[80%]"
          alt=""
        />
      </section>
      <section className="bg-slate-50">
        <div className="flex max-w-6xl w-full px-4 mx-auto pt-[40px] pb-[80px] max-md:flex-col max-md:gap-8">
          <div className="flex w-full flex-col justify-between mb-14 max-md:flex-col max-md:items-start">
            <h2 className="font-extrabold text-3xl mb-8 mt-12 text-slate-900">
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
      </section>
    </div >
  )
}

export default Home
