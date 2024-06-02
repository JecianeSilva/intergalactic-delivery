import { UserProps } from "./reducer";

export enum ActionTypes {
  ADD_USER = "ADD_USER",
  ADD_ADDRESS = "ADD_ADDRESS",
}

export function addUserAction(user: UserProps) {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      user,
    },
  };
}

export function addAdressAction(address: UserProps) {
  return {
    type: ActionTypes.ADD_ADDRESS,
    payload: {
      address,
    },
  };
}