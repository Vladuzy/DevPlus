import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const HabitsContext = createContext();

export const HabitsProviders = ({ children }) => {
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
      .then((response) => console.log(response));
  };

  const updateHabits = () => {
    const data = {
      how_much_achieved: 100,
      achieved: true,
    };
    api
      .patch("/habits/1451/", data, {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) => console.log(response));
  };

  const deleteHabits = () => {
    api
      .delete("/habits/1449/", {
        headers: {
          Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzc2NzMwLCJqdGkiOiJmMWViZTk4MTgwN2Q0YzdlYmU2NDc3ZmI3YzFmN2Q5NyIsInVzZXJfaWQiOjcxOX0.lgfQ81zXE7u8uTbisp7YcdVLBbmWlqRpOpJW3EeFjE8"}`,
        },
      })
      .then((response) => console.log(response));
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
        localStorage.setItem("@User:habits", JSON.stringify(data));
      });
  };

  useEffect(() => {
    getHabits();
  }, []);

  return <HabitsContext.Provider>{children}</HabitsContext.Provider>;
};
