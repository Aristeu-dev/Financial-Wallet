import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
  user: object;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@FinancialWallet:token");
    const user = localStorage.getItem("@FinancialWallet:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem("@FinancialWallet:token", token);
    localStorage.setItem("@FinancialWallet:user", JSON.stringify(user));
    setData({ token, user });
  }, []);
  const signOut = useCallback(async () => {
    localStorage.removeItem("@FinancialWallet:token");
    localStorage.removeItem("@FinancialWallet:user");
    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
