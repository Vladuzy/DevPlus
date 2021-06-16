import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const HabitsContext = createContext();

export const HabitsProviders = ({ children }) => {
  const { token, id } = useAuth();
  const [doingHabits, setDoingHabits] = useState(() => {
    return JSON.parse(localStorage.getItem("@User:habits")) || [];
  });

  const createHabits = (data) => {
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Criou habito com sucesso");
        setDoingHabits([...doingHabits, response]);
        getHabits();
      })
      .catch((_) => {
        toast.error("Erro ao criar habito");
      });
  };

  const updateTextHabits = (data, id) => {
    //Mudança do data
    let dataHabitUpdate = data;

    api
      .patch(`/habits/${id}/`, dataHabitUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>  setDoingHabits([...doingHabits, response]) )
      .then(() => getHabits())
      .catch((err) => console.log(err));
  };

  const updateHabits = (habit, action) => {
    //Mudança do data
    let dataHabitUpdate = {};
    if (habit.achieved === true && action === "activate") {
      dataHabitUpdate = {
        achieved: false,
      };
    } else if (habit.achieved === false && action === "archieved") {
      dataHabitUpdate = {
        achieved: true,
      };
    }

    api
      .patch(`/habits/${habit.id}/`, dataHabitUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setDoingHabits([...doingHabits, response]))
      .then(() => getHabits())
      .catch((err) => console.log(err));
  };

  const deleteHabits = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getHabits())
      .catch((err) => console.log(err));
  };

  const getHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response;
        setDoingHabits(response.data);
        localStorage.setItem("@DevelopingHabitus:habits", JSON.stringify(data));
      });
  };

  useEffect(() => {
    getHabits();
  }, [token]);

  return (
    <HabitsContext.Provider
      value={{
        getHabits,
        deleteHabits,
        updateHabits,
        createHabits,
        doingHabits,
        setDoingHabits,
        updateTextHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
