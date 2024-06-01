import { UserProps } from "./reducer";

export enum ActionTypes {
  ADD_USER = "ADD_USER",
}

export function addUserAction(user: UserProps) {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      user,
    },
  };
}