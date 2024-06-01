import { ActionTypes } from "./actions";

export interface UserProps {
  quantity: number;
}

export function userReducer(state: UserProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_USER: {
      const newUser = state;
      localStorage.setItem(
        "@intergalactic-delivery:user-1.0.0",
        JSON.stringify(newUser)
      );

      return newUser;
    }

    default:
      return state;
  }
}