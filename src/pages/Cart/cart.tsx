import { ProductCard, ProductProps } from "../../components/ProductCard/ProductCard";

function Cart() {
  let productsFilter: ProductProps[] = [];

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex max-w-6xl w-full px-4 mx-auto pb-[80px] max-md:flex-col max-md:gap-8">
        <div className="flex w-full flex-col justify-between mb-14 max-md:flex-col max-md:items-start">
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

export default Cart
