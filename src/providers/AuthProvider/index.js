import { createContext, useContext, useState } from "react";
import api from "../../services";

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(() => {
    return parseInt(localStorage.getItem("@DevelopingHabitus:user")) || "";
  });
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:token")) || "";
  });

  const handleLogin = (userData, decoder, history, toast) => {
    api
      .post("/sessions/", userData)
      .then((res) => {
        const { access } = res.data;
        setToken(access);
        localStorage.setItem(
          "@DevelopingHabitus:token",
          JSON.stringify(access)
        );

        const decodedToken = decoder(access);
        setId(decodedToken.user_id);
        localStorage.setItem(
          "@DevelopingHabitus:user",
          `${decodedToken.user_id}`
        );

        toast.success("Sucesso ao logar!");
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Error ao fazer o Login.");
      });
  };

  return (
    <AuthContext.Provider value={{ handleLogin, token, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
