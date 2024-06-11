import { Button } from "../../components/Button/Button";

import { useCart } from "../../contexts/Cart/CartContext";

import { formatPrice } from "../../utils/mask";
import { Modal } from "../../components/Modal/Modal";
import { WarningCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import ProductCardItems from "../../components/ProductCardItems/ProductCardItems";

export default function Card() {
  const {
    cart,
  } = useCart();

  const navigate = useNavigate();
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <form className="flex gap-8 max-w-6xl min-h-fit w-full mx-auto">
      <div className="w-full mx-auto py-[80px] px-8">
        {cart.length === 0 ? (
          <>
            <div className="bg-gray-100 p-10 w-[448px] rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px] flex justify-center flex-col gap-6 max-[600px]:w-full max-[475px]:p-4">
              <WarningCircle size={72} className="mx-auto max-[475px]:h-[50px]" />
              <strong className="font-cursive font-extrabold text-[1.5rem] text-blue-950 text-center max-[475px]:text-[1.2rem]">
                Adicione alguns dos nossos produtos no carrinho para finalizar o
                pedido.
              </strong>
            </div>
            <Button label="Voltar" type="button" onClick={() => navigate('/')} className="w-[50%] mx-auto mt-8 mb-20" />
          </>
        ) : (
          <>
            <Modal title="">
              <div className={"w-full"}>
                {cart.map((productInCart) => (
                  <ProductCardItems key={productInCart.id} product={productInCart} />
                ))}
              </div>
            </Modal>
            <div className="flex flex-col gap-4 w-full py-2">
              <span className="text-sm text-gray-950 font-bold flex items-center justify-between">
                Total de itens
                <span className="text-lg text-blue-950">{formatPrice(total)}</span>
              </span>
            </div>
            <div className="flex justify-end gap-12 my-12">
              <Button
                type="button"
                label="Voltar"
                className="w-[25%] bg-gray-700 max-[600px]:w-[100%]"
                onClick={() => navigate('/')}
              />
              <Button
                type="submit"
                label="Confirmar Pedido"
                className="w-[25%] bg-blue-700  max-[600px]:w-[100%]"
              />
            </div>
          </>
        )}
      </div >
    </form >
  );
}