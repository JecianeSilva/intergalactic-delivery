import { HTMLAttributes, useState } from "react";
import { toast } from "react-toastify";
import { ShoppingCart } from "phosphor-react";

import { formatPrice } from "../../utils/mask";
import { useCart } from "../../contexts/Cart/CartContext";

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  categories: string[];
}

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  product: ProductProps;
}

export function ProductCard({ product, className, ...rest }: ProductCardProps) {
  const { addProductInCart } = useCart();

  const [quantityProduct, setQuantityProduct] = useState(1);

  function handleAddProductInCart() {
    addProductInCart({ ...product, quantity: quantityProduct });
    setQuantityProduct(1);
    toast.success("Produto adicionado ao carrinho com sucesso!");
  }

  return (
    <div
      className={`flex flex-col justify-between w-64 h-[350px] bg-slate-50 rounded-tl-md rounded-tr-[1.75rem] rounded-br-md rounded-bl-[1.75rem] flex flex-col items-center py-6 px-3 ${className} max-[600px]:w-full`}
      {...rest}
    >
      <header className="mb-4">
        <h3 className="font-bold text-md text-slate-900 leading-[1.3] text-center mb-1">
          {product.name}
        </h3>
        <p className="text-[12px] min-h-[32px] leading-[1.3] text-slate-700 text-center">
          {product.description}
        </p>
      </header>
      <main className="flex flex-col items-center gap-2">
        <img src={product.image} alt={product.name} className="w-auto h-[150px] max-h-52" />
        <span className="text-slate-950 font-extrabold text-xl leading-[1.3] mr-4">
          {formatPrice(product.price)}
        </span>
      </main>

      <footer className="flex flex-col items-center mt-auto">
        <button
          className="p-1 px-2 rounded-md bg-blue-600 
          hover:bg-blue-950 transition-colors
          flex items-center justify-center"
          onClick={handleAddProductInCart}
        >
          <ShoppingCart size={18} weight="fill" className="fill-white mr-2" />
          <span className="text-white">Comprar</span>
        </button>
      </footer>
    </div>
  );
}