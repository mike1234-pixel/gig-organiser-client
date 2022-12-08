import { createContext, useState, useContext, ReactNode } from "react";
import { UserI } from "../types/User_Object";

interface LoginState {
  isLoggedIn: boolean;
  user: UserI | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}

// Create the login state context
const LoginStateContext = createContext<LoginState>({
  isLoggedIn: false,
  user: null,
  setIsLoggedIn: () => {},
  setUser: () => {},
});

// Create a hook to access the login state context
export const useLoginState = () => useContext(LoginStateContext);

// Create a provider for the login state context
export const LoginStateProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserI | null>(null);

  return (
    <LoginStateContext.Provider
      value={{ isLoggedIn, user, setIsLoggedIn, setUser }}
    >
      {children}
    </LoginStateContext.Provider>
  );
};
