import { Planet, ShoppingCart } from "phosphor-react";
import { useCart } from "../../contexts/Cart/CartContext";
import { Link } from "react-router-dom";

export function Header({ isAuthenticated = false }) {
  const { cart } = useCart();

  const totalProductsInCart = cart.length;

  return (
    <header className="min-h-[70px] bg-blue-600 flex items-center">
      <div className="flex max-w-7xl w-full mx-auto justify-between px-4">
        <div className="flex items-center">
          <Planet size={22} color="white" weight="fill" className="mr-2" />
          <h3 className="flex flex-1 font-bold uppercase text-white letter-lg">Delivery Intergaláctico</h3>
        </div>
        {isAuthenticated &&
          <div className="relative">
            <Link
              to="/carrinho-de-compras"
              className="p-2 rounded-md flex items-center justify-center"
            >
              <ShoppingCart
                size={24}
                weight="fill"
                className="fill-white"
              />
            </Link>

            {totalProductsInCart > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                {totalProductsInCart}
              </span>
            )}
          </div>}
      </div>

    </header >
  );
}