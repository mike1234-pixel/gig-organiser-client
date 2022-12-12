import { createContext, useState, useContext, ReactNode } from "react";
import { UserI } from "../types/User_Object";

interface AuthI {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}

const AuthContext = createContext<AuthI>({
  user: null,
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
