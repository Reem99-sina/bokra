import useLocalStorage from "@/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

type AuthData = {
  token: string;
};

type AuthValuesType = {
  isAuthenticated: boolean;
  authData: AuthData | null;
  logout: () => Promise<void>;
  authenticate: (authData: AuthData) => void;
};

const localStorageKey = "authData";

const defaultProvider: AuthValuesType = {
  authData: null,
  isAuthenticated: false,
  logout: () => Promise.resolve(undefined),
  authenticate: () => null,
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { removeStoredValue, setStoredValue, storedValue } =
    useLocalStorage<AuthData>(localStorageKey);

  const [authData, setAuthData] = useState<AuthData | null>(
    storedValue || null
  );

  useEffect(() => {
    if (storedValue) {
      setAuthData(storedValue as AuthData);
    }
  }, [storedValue]);

  const authenticate = async (newAuthData: AuthData) => {
    setStoredValue(localStorageKey, newAuthData);
    setAuthData(newAuthData);
  };

  const handleLogout = async () => {
    removeStoredValue(localStorageKey);
    queryClient.removeQueries();
    queryClient.resetQueries();
    queryClient.invalidateQueries();
    setAuthData(null);
    router.replace("/");
  };

  const values = {
    isAuthenticated: Boolean(authData),
    authData,
    authenticate,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
