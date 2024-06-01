import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { AddressFormData } from "../../components/Form/FormAdress";

interface UserContextData {
  address: AddressFormData | null;
  setAddress: (address: AddressFormData | null) => void;
}

export const UserContext = createContext({} as UserContextData);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [address, setAddress] = useState<AddressFormData | null>(null);

  return (
    <UserContext.Provider
      value={{
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