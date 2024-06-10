import { ProductCartProps } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
}

export function addProductInCartAction(product: ProductCartProps) {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: {
      product,
    },
  };
}