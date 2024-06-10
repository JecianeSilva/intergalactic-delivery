import { produce } from "immer";
import { ActionTypes } from "./actions";

import { ProductProps } from "../../components/ProductCard/ProductCard";

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

export function cartReducer(state: ProductCartProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART: {
      const newListProductsInCart = produce(state, (draft) => {
        const indexProduct = draft.findIndex(
          (productInCart) => productInCart.id === action.payload.product.id
        );

        if (indexProduct < 0) {
          draft.push(action.payload.product);
        } else {
          draft[indexProduct].quantity += action.payload.product.quantity;
        }
      });

      localStorage.setItem(
        "@product-delivery:cart-1.0.0",
        JSON.stringify(newListProductsInCart)
      );

      return newListProductsInCart;
    }

    default:
      return state;
  }
}