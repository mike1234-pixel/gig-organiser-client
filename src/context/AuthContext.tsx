import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useLoginUser } from "../hooks/useLoginUser";
import { UserI } from "../types/User_Object";

interface AuthI {
  user: UserI | null;
  setUser: (user: AuthI["user"]) => void;
  error: Error | null;
  setError: (error: AuthI["error"]) => void;
}

const AuthContext = createContext<AuthI>({
  user: null,
  setUser: () => {},
  error: null,
  setError: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthI["user"]>(null);
  const [error, setError] = useState<AuthI["error"]>(null);

  const { error: responseError } = useLoginUser();

  useEffect(() => {
    setError(responseError as Error);
  }, [responseError]);

  return (
    <AuthContext.Provider value={{ user, setUser, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};
