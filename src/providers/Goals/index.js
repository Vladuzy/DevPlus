import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "../AuthProvider";

import api from "../../services";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  //Lembrar de passar setGoal para receber os dados do modal criar Goal
  // const [goal, setGoal] = useState({})
  const [goals, setGoals] = useState([]);

  const getGoals = () => {
    //Lembrar de passar o Id do grupo
    api
      .get("/goals/?group=2")
      .then((response) => {
        setGoals(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const postGoal = () => {
    //Lembrar de mandar o que ta sendo enviado "dataGoal" (pegar os inputs no modal de criar Goal)
    //Lembrar de passar o Id do grupo
    //Lembrar de passar o token
    const dataGoal = {
      title:
        "Nenhuma falta na academia cometida pelos membros do grupo na semana",
      difficulty: "Díficil",
      how_much_achieved: 100,
      group: 2,
    };

    api
      .post("/goals/", dataGoal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGoals())
      .catch((err) => console.log(err));
  };

  const patchGoal = () => {
    //Lembrar de receber o goal por props na função quando pegar no card
    //Lembrar de mandar o que ta sendo enviado "dataGoal" ok
    //Lembrar de passar o Id do goal (goal.id)
    //Lembrar de alterar o id no url
    //Lembrar de passar o token ok
    const dataGoalUpdate = {
      achieved: true,
    };

    //Mudança do data
    // const dataGoalUpdate = {}
    // if(goal.archieved === true){
    //     dataGoalUpdate = {
    //         "achieved": true
    //       }
    // }else{
    //     dataGoalUpdate = {
    //         "achieved": false
    //       }
    // }

    api
      .patch("/goals/1576/", dataGoalUpdate, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGoals())
      .catch((err) => console.log(err));
  };

  const deleteGoal = () => {
    //Lembrar de receber o goal por props na função quando pegar no card
    //Lembrar de passar o Id do goal (goal.id)
    //Lembrar de alterar o id no url
    //Lembrar de passar o token

    api
      .delete("/goals/1577/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGoals())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <GoalsContext.Provider
      value={{ goals, getGoals, postGoal, patchGoal, deleteGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
