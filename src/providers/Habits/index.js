import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";
import { useAuth } from "../AuthProvider";

export const HabitsContext = createContext();

export const HabitsProviders = ({ children }) => {
  const { token, id } = useAuth();
  const [habitId, setHabitId] = useState("");
  const [doingHabits, setDoingHabits] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:habits")) || [];
  });

  const [habitInfo, setHabitInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:habit")) || {};
  });

  const createHabits = (data) => {
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Criou habito com sucesso", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
        setDoingHabits([...doingHabits, response]);
        getHabits();
      })
      .catch((_) => {
        toast.error("Erro ao criar habito", {
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
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
      .then((response) => setDoingHabits([...doingHabits, response]))
      .then(() => getHabits())
      .catch((err) => toast.error("erro ao editar Hábito"));
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
      .catch((err) => toast.error("erro ao editar Hábito"));
  };

  const deleteHabits = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getHabits())
      .catch((err) => toast.error("erro ao deletar Hábito"));
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

  const getOneHabit = (habitId) => {
    api
      .get(`/habits/${habitId}/`)
      .then((response) => {
        localStorage.setItem(
          "@DevelopingHabitus:habit",
          JSON.stringify(response.data)
        );
        setHabitInfo(response.data);
      })
      .catch((err) => toast.error("erro ao editar Hábito"));
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
        getOneHabit,
        habitInfo,
        habitId,
        setHabitId,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
