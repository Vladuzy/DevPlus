import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const ActiviesContext = createContext();

export const ActiviesProvider = ({ children }) => {
  const { token } = useAuth();
  const [activies, setActivies] = useState([]);
  const createActivies = () => {
    const data = {
      title: "Crossfit",
      realization_time: "2021-03-10T15:00:00Z",
      group: 2,
    };
    api
      .post("/activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const getGroupActivies = () => {
    api
      .get("/activities/")
      .then((response) => {
        // verificar no console os dados do response
        setActivies(response.data.results);
        localStorage.setItem("@User:activity", JSON.stringify(activies));
      })
      .catch((err) => console.log(err));
  };

  const patchActivies = () => {
    const activityUpdate = {
      title: "Crossfit Atualizado",
    };
    api
      .patch("/activities/1/", activityUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const deleteActivity = () => {
    api
      .delete("/activities/690/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroupActivies();
  }, []);

  return (
    <ActiviesContext.Provider
      value={{ activies, createActivies, patchActivies, deleteActivity }}
    >
      {children}
    </ActiviesContext.Provider>
  );
};

export const useActivity = () => useContext(ActiviesContext);
