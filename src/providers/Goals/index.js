import { createContext, useState, useEffect, useContext } from "react";

import { AuthContext } from "../AuthProvider";

import api from "../../services";
import { toast } from "react-toastify";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  //Lembrar de passar setGoal para receber os dados do modal criar Goal
  // const [goal, setGoal] = useState({})
  const [goals, setGoals] = useState(() => {
    return JSON.parse(localStorage.getItem("@DevelopingHabitus:goals")) || [];
  });

  const [goal, setGoal] = useState({}); 

  const [groupId, setGroupId] = useState(() => {
    return parseInt(localStorage.getItem("@DevelopingHabitus:groupId")) || "";
  });

  const getGoals = (id="") => {
    //pegando o id do grupo
    setGroupId(id)
    //salvando no localStorage
    localStorage.setItem( "@DevelopingHabitus:groupId", JSON.stringify(id))
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
    const fullData = {...data, group: groupId}
    api
      .post("/goals/", fullData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>{ 
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
            "achieved": false,
            "how_much_achieved": 0
          }
    }else if(goal.achieved === false && action === "archieved"){
        dataGoalUpdate = {
            "achieved": true,
            "how_much_achieved": 100
          }
    }

    api
      .patch(`/goals/${goal.id}/`, dataGoalUpdate, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getGoals(groupId))
      .catch((err) => console.log(err));
  };

  const updateGoals = (data, id) => {
    api.patch(`/goals/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(_ => {
      getGoals(groupId);
      getOneGoal(id)
      toast.success('Meta atualizada com sucesso!!!', {
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
      });
    })
    .catch(_ => toast.error('erro em atualizar a meta, tente de novo!', {
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
    }))
  }

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
      .then(() => getGoals(groupId))
      .catch((err) => console.log(err));
  };

  const getOneGoal = (goalId) => {
    api
    .get(`/goals/${goalId}/`)
    .then((response) => {
      // localStorage.setItem( "@DevelopingHabitus:goal", JSON.stringify(response.data));
      setGoal(response.data)
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getGoals(groupId);
  }, [groupId]);

  return (
    <GoalsContext.Provider
      value={{ goals, getGoals, createGoals, patchGoal, updateGoals, deleteGoal, getOneGoal, goal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext)
