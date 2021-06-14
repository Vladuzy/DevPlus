import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";

export const HabitsContext = createContext();

export const HabitsProviders = ({ children }) => {
  const [doingHabits, setDoingHabits] = useState(() => {
    return JSON.parse(localStorage.getItem("@User:habits")) || [];
  });

  const createHabits = () => {
    const data = {
      title: "Calistenia a noite",
      category: "Sáude",
      difficulty: "Muito díficil",
      frequency: "Diária",
      achieved: false,
      how_much_achieved: 30,
      user: 1,
    };
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) => setDoingHabits([...doingHabits, response]));
  };

  const updateHabits = (habit, action) => {
  
    //Mudança do data
    let dataHabitUpdate = {}
    if(habit.achieved === true && action === "activate"){
      dataHabitUpdate = {
            "achieved": false
          }
    }else if(habit.achieved === false && action === "archieved"){
      dataHabitUpdate = {
            "achieved": true
          }
    }

    api
      .patch(`/habits/${habit.id}/`, dataHabitUpdate, {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
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
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) =>console.log(response))
      .then(() => getHabits())
      .catch((err) => console.log(err));
  };

  const getHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) => {
        const { data } = response;
        setDoingHabits(response.data)
        localStorage.setItem("@DevelopingHabitus:habits", JSON.stringify(data));
      });
  };

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <HabitsContext.Provider
      value={{
        getHabits,
        deleteHabits,
        updateHabits,
        createHabits,
        doingHabits,
        setDoingHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
