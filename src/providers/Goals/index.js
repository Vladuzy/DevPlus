import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "../AuthProvider";

import api from "../../services";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  //Lembrar de passar setGoal para receber os dados do modal criar Goal
  // const [goal, setGoal] = useState({})
  const [goals, setGoals] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:goals")) || "";
  });
  const [groupId, setGroupId] = useState(() => {
    return parseInt(localStorage.getItem("@DevelopingHabitus:goalId")) || "";
  });

  const getGoals = (id="") => {
    //pegando o id do grupo
    setGroupId(id)
    //salvando no localStorage
    localStorage.setItem( "@DevelopingHabitus:goalId", JSON.stringify(id))
    //Lembrar de passar o Id do grupo
    if(id !== ""){
      api
      .get(`/goals/?group=${id}`)
      .then((response) => {
        setGoals(response.data.results);
        localStorage.setItem( "@DevelopingHabitus:goals", JSON.stringify(response.data.results));
      })
      .catch((err) => console.log(err));
    }
  };

  const createGoals = (data) => {
    //Lembrar de mandar o que ta sendo enviado "dataGoal" (pegar os inputs no modal de criar Goal)
    //Lembrar de passar o Id do grupo
    //Lembrar de passar o token

    api
      .post("/goals/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>{ 
        console.log(res)
        getGoals(groupId)
      })
      .catch((err) => console.log(err));
  };

  const patchGoal = (goal, action) => {
    //Lembrar de receber o goal por props na função quando pegar no card
    //Lembrar de mandar o que ta sendo enviado "dataGoal" ok
    //Lembrar de passar o Id do goal (goal.id)
    //Lembrar de alterar o id no url
    //Lembrar de passar o token ok

    // const dataGoalUpdate = {
    //   achieved: false,
    // };

    //Mudança do data
    let dataGoalUpdate = {}
    if(goal.achieved === true && action === "activate"){
        dataGoalUpdate = {
            "achieved": false
          }
    }else if(goal.achieved === false && action === "archieved"){
        dataGoalUpdate = {
            "achieved": true
          }
    }

    api
      .patch(`/goals/${goal.id}/`, dataGoalUpdate, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => getGoals(groupId))
      .catch((err) => console.log(err));
  };

  const deleteGoal = (goal) => {
    //Lembrar de receber o goal por props na função quando pegar no card
    //Lembrar de passar o Id do goal (goal.id)
    //Lembrar de alterar o id no url
    //Lembrar de passar o token

    api
      .delete(`/goals/${goal.id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response => console.log(response)))
      .then(() => getGoals(groupId))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGoals(groupId);
  }, [groupId]);

  return (
    <GoalsContext.Provider
      value={{ goals, getGoals, createGoals, patchGoal, deleteGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext)
