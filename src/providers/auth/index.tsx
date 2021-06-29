import { createContext, ReactNode, Dispatch, SetStateAction, useContext, useState } from "react";
import { History } from 'history'
import api from "../../services/api";

interface AuthProviderProps {
    children: ReactNode;
}

interface UserData{
    username: string;
    password: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

interface AuthProviderData{
    token: string;
    autorization: boolean;
    setAuth: Dispatch<SetStateAction<string>>
    setAutorization: Dispatch<SetStateAction<boolean>>
    signIn: (userData: UserData, setError: Dispatch<SetStateAction<boolean>>, history: History) => void;
}

export const AuthProvider = ({ 
    children, 
    }: AuthProviderProps ) => {
  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState(token);

  const [autorization, setAutorization] = useState(false)

  const signIn = (
                    userData: UserData, 
                    setError: Dispatch<SetStateAction<boolean>>, 
                    history: History) => {
    api
      .post("/sessions/", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.access);
        setAuth(response.data.access);
        setAutorization(true)
        history.push("/store");
      })
      .catch((err) => setError(true));
  };

  return (
    <AuthContext.Provider value={{ token: auth, autorization, setAuth, signIn, setAutorization }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
