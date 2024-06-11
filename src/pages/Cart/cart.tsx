import { Button } from "../../components/Button/Button";

import { useCart } from "../../contexts/Cart/CartContext";

import { formatPrice } from "../../utils/mask";
import { Modal } from "../../components/Modal/Modal";
import { WarningCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import ProductCardItems from "../../components/ProductCardItems/ProductCardItems";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Card() {
  const {
    cart,
    onResetCart
  } = useCart();

  const navigate = useNavigate();
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const { handleSubmit } = useForm({});

  function handleSubmitFormAddress(data: any) {
    if (cart.length === 0) {
      console.log(data)
      return toast.info("Adicione um produto no carrinho.");
    }

    onResetCart();
    navigate("/");
    return toast.info("Pedido enviado com sucesso!");
  }

  return (
    <form
      className="flex gap-8 max-w-6xl min-h-screen h-full w-full mx-auto"
      onSubmit={handleSubmit(handleSubmitFormAddress)}
    >
      <div className="w-full mx-auto py-[80px] px-8 max-[600px]:py-[40px] max-[600px]:px-4">
        {cart.length === 0 ? (
          <>
            <div className="mx-auto bg-gray-100 p-10 w-[448px] rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px] flex justify-center flex-col gap-6 max-[600px]:w-full max-[475px]:p-4">
              <WarningCircle size={72} className="text-blue-950 mx-auto max-[475px]:h-[50px]" />
              <strong className="font-bold text-[1.5rem] text-blue-950 text-center max-[475px]:text-[1.3rem]">
                Adicione alguns dos nossos produtos no carrinho para finalizar o
                pedido.
              </strong>
            </div>
            <Button label="Voltar" type="button" onClick={() => navigate('/')} className="w-[250px] mx-auto mt-8 mb-20 max-[600px]:w-full" />
          </>
        ) : (
          <>
            <Modal title="Carrinho de Compra:">
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
            <div className="flex justify-end gap-8 py-8 max-[600px]:flex-col">
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