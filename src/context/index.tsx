import { ReactNode, createContext, useState } from "react";
import { User } from "../types/user";

export const GlobalContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
} | null>(null);

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user)

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
