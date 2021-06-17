import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(() => {
    return parseInt(localStorage.getItem("@DevelopingHabitus:user")) || "";
  });
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:token")) || "";
  });

  const [isAuthenticated, setIsAuthenticated] = useState(
    token !== "" ? true : false
  );

  const [isSubscribe, setIsSubscribe] = useState(false);

  const [userInfo, setUserInfo] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("@DevelopingHabitus:userInfo")) || {}
    );
  });

  const handleAuth = () => {
    if (token !== "") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUserInfo();
    handleAuth();
  }, [token]);

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

        toast.success("Sucesso ao logar!", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Error ao fazer o Login.");
      });
  };

  const getUserInfo = () => {
    api.get(`/users/${id}/`).then((res) => {
      localStorage.setItem(
        "@DevelopingHabitus:userInfo",
        JSON.stringify(res.data)
      );
      setUserInfo(res.data);
    });
  };

  const updateUserInfo = (data) => {
    api
      .patch(`/users/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        updateUserInfo,
        setIsAuthenticated,
        handleLogin,
        token,
        id,
        isAuthenticated,
        setIsSubscribe,
        isSubscribe,
        getUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// 1 - Criar a variavel isAuthentication
// 2 - setar pelo token criando função
// 3 - chamar a função com o useEffect [token]
// 4 - em cada page passar isAuthentication
