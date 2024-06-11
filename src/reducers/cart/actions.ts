import { ProductCartProps, UpdateQuantityProductProps } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
  RESET_CART = "RESET_CART",
  UPDATE_QUANTITY_ONE_PRODUCT = "UPDATE_QUANTITY_ONE_PRODUCT",
  REMOVE_ONE_PRODUCT_FROM_CART = "REMOVE_ONE_PRODUCT_FROM_CART",
}

export function addProductInCartAction(product: ProductCartProps) {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: {
      product,
    },
  };
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  };
}

export function updateQuantityOneProductAction(
  product: UpdateQuantityProductProps
) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_ONE_PRODUCT,
    payload: {
      ...product,
    },
  };
}

export function removeOneProductFromCartAction(productId: number) {
  return {
    type: ActionTypes.REMOVE_ONE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  };
}