import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useReducer,
} from "react";
import { produce } from "immer";

import {
  addProductInCartAction,
} from "../../reducers/cart/actions";

import {
  cartReducer,
  ProductCartProps,
} from "../../reducers/cart/reducer";


interface CartContextData {
  cart: ProductCartProps[];
  categoriesProductsSelected: string[];

  addProductInCart: (product: ProductCartProps) => void;
  onUpdateCategoriesProductsSelected: (category: string) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatchCart] = useReducer(cartReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      "@product-delivery:cart-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return initialState;
  });

  const [categoriesProductsSelected, setCategoriesProductsSelected] = useState<string[]>([]);

  function addProductInCart(product: ProductCartProps) {
    dispatchCart(addProductInCartAction(product));
  }

  function onUpdateCategoriesProductsSelected(category: string) {
    const newCategories = produce(categoriesProductsSelected, (draft) => {
      const indexCategory = draft.findIndex(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      );

      if (indexCategory < 0) {
        draft.push(category);
      } else {
        draft.splice(indexCategory, 1);
      }
    });

    setCategoriesProductsSelected(newCategories);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        categoriesProductsSelected,

        addProductInCart,
        onUpdateCategoriesProductsSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}