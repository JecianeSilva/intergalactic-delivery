import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { AddressFormData as AddressFormDataTerra } from "../../components/Form/FormAdressTerra";
import { AddressFormData as AddressFormDataMarte } from "../../components/Form/FormAdressMarte";
import { UserFormData } from "../../components/Form/FormUser";

interface UserContextData {
  address: AddressFormDataTerra | AddressFormDataMarte | null;
  setAddress: (address: AddressFormDataTerra | AddressFormDataMarte | null) => void;
  user: UserFormData | null;
  setUser: (user: UserFormData | null) => void;
}

export const UserContext = createContext({} as UserContextData);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [address, setAddress] = useState<AddressFormDataTerra | AddressFormDataMarte | null>(null);
  const [user, setUser] = useState<UserFormData | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        address,
        setAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}