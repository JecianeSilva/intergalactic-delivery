import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface UserProps {
  currentStep: number;
  user: any,
  address: any,
}

export function userReducer(state: UserProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_USER: {
      const newUser = produce(state, (draft) => {
        draft.push(action.payload)
      });

      localStorage.setItem(
        "@intergalactic-delivery:user-1.0.0",
        JSON.stringify(newUser)
      );
      return newUser;
    }

    case ActionTypes.ADD_ADDRESS: {
      const newUser = produce(state, (draft) => {
        draft.push(action.payload)
      });

      localStorage.setItem(
        "@delivery-intergalactic:dataUser-1.0.0",
        JSON.stringify(newUser)
      );

      return newUser;
    }
    default:
      return state;
  }
}