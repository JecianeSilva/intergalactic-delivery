import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { AddressFormData } from "../../components/Form/FormAdressTerra";
import { UserFormData } from "../../components/Form/FormUser";

interface UserContextData {
  address: AddressFormData | null;
  setAddress: (address: AddressFormData | null) => void;
  user: UserFormData | null;
  setUser: (user: UserFormData | null) => void;
}

export const UserContext = createContext({} as UserContextData);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [address, setAddress] = useState<AddressFormData | null>(null);
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