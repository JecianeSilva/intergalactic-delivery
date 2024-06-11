import { toast } from "react-toastify";
import { Minus, MinusCircle, Plus, PlusCircle, Trash, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { useCart } from "../../contexts/Cart/CartContext";
import { formatPrice } from "../../utils/mask";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface ProductCardOnCartProps {
  product: ProductProps;
}

export default function ProductCardItems({ product }: ProductCardOnCartProps) {
  const { onRemoveProductFromCart, onUpdateQuantityProduct } = useCart();

  function handleDecreaseQuantity() {
    onUpdateQuantityProduct({
      productId: product.id,
      quantity: product.quantity - 1,
    });
  }

  function handleIncreaseQuantity() {
    onUpdateQuantityProduct({
      productId: product.id,
      quantity: product.quantity + 1,
    });
  }

  function handleRemoveProductFromCart() {
    onRemoveProductFromCart(product.id);
    toast.info(`${product.name} foi removido com sucesso!`);
  }

  return (
    <Dialog.Root>
      <div className="flex justify-between max-[600px]:flex-col" >
        <div className="flex gap-8 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:mb-8 max-[600px]:items-center" >
          <img src={product.image} className="h-[70px] w-[70px] bg-center bg-contain shadow-md" alt={product.name} />
          <div className="flex flex-col gap-1">
            <p className="font-bold text-md text-gray-950" >
              {product.name}
            </p>
            <span className="text-md text-gray-600" >
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center max-[600px]:justify-between" >
          <div className={`flex items-center justify-center gap-1`}>
            <button
              type="button"
              className="h-10 w-10 flex justify-center items-center rounded-md 
              text-black 
              hover:text-white hover:bg-blue-600
              disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-white"
              disabled={product.quantity === 1}
              onClick={() => handleDecreaseQuantity()}
            >
              <Minus size={18} />
            </button>

            <span className="h-10 border w-10 flex justify-center items-center text-sm leading-[1.3] text-gray-950">
              {product.quantity}
            </span>

            <button
              type="button"
              className="h-10 w-10 flex justify-center items-center rounded-md
              text-black 
              hover:text-white hover:bg-blue-600"
              onClick={() => handleIncreaseQuantity()}
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="flex justify-end w-24 ">
            <Dialog.Trigger asChild >
              <button className="h-10 w-10 flex justify-center items-center gap-2 bg-gray-200 rounded-md
              text-gray-950 text-xs uppercase font-semibold
              hover:bg-red-500 hover:text-white" >
                <Trash size={20} />
              </button>
            </Dialog.Trigger>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-200 my-6 last:mb-0" />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-25 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content
          className="data-[state=open]:animate-contentShow 
          fixed top-[45%] left-[50%] max-h-[90vh] w-[90vw] max-w-[450px] 
          translate-x-[-50%] translate-y-[-50%] 
          rounded-[6px] bg-white p-[25px] 
          shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
          focus:outline-none"
        >
          <Dialog.Title className="text-lg text-center m-0 text-[18px] font-bold" >
            {`Deseja remover o ${product.name} do carrinho?`}
          </Dialog.Title>

          <div className="flex items-center justify-between gap-2 mt-4" >
            <Dialog.Close asChild >
              <button className="bg-gray-200 px-4 py-2 rounded w-1/2 hover:bg-gray-300 transition-colors" >
                Cancelar
              </button>
            </Dialog.Close>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded w-1/2 hover:bg-red-600 transition-colors"
              onClick={handleRemoveProductFromCart}
            >
              Remover
            </button>
          </div>

          <Dialog.Close asChild >
            <button
              className="absolute top-[10px] right-[10px] flex items-center justify-center"
              aria-label="Close">
              <X size={18} className="text-brow-900" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}