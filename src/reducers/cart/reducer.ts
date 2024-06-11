import { produce } from "immer";
import { ActionTypes } from "./actions";

import { ProductProps } from "../../components/ProductCard/ProductCard";

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

export interface UpdateQuantityProductProps {
  productId: number;
  quantity: number;
}

export function cartReducer(state: ProductCartProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART: {
      const newListProductsInCart = produce(state, (draft) => {
        // search product in cart
        const indexProduct = draft.findIndex(
          (productInCart) => productInCart.id === action.payload.product.id
        );

        // if product is not in the cart, just add
        // if the product is already in the cart, just increase the quantity
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

    case ActionTypes.RESET_CART:
      return [];

    case ActionTypes.UPDATE_QUANTITY_ONE_PRODUCT: {
      const listProductsInCartUpdated = produce(state, (draft) => {
        const indexProduct = draft.findIndex(
          (product) => product.id === action.payload.productId
        );

        draft[indexProduct].quantity = action.payload.quantity;
      });

      return listProductsInCartUpdated;
    }

    case ActionTypes.REMOVE_ONE_PRODUCT_FROM_CART: {
      const listProductsUpdated = produce(state, (draft) => {
        const indexProduct = draft.findIndex(
          (product) => product.id === action.payload.productId
        );

        draft.splice(indexProduct, 1);
      });

      return listProductsUpdated;
    }

    default:
      return state;
  }
}