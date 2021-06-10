import {createContext, useState, useEffect} from "react"

import api from "../../services"

export const GoalsContext = createContext()

export const GoalsProvider = ({children}) => {
    const [goals, setGoals] = useState([]);

    const getGoals = () => {
        //Lembrar de passar o Id do grupo
        api
            .get("/goals/?group=2")
            .then((response) => {
              setGoals(response.data.results)
            })
            .catch(err => console.log(err))
    }
   
    const postGoal = () => {
        //Lembrar de mandar o que ta sendo enviado "dataGoal"
        //Lembrar de passar o Id do grupo
        //Lembrar de passar o token
        const dataGoal = {
            "title": "Nenhuma falta na academia cometida pelos membros do grupo na semana",
            "difficulty": "Díficil",
            "how_much_achieved": 100,
            "group": 2
        }

        api.post("/goals/", dataGoal, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzAxNzg2LCJqdGkiOiJiMTg0YzE3MTQ2YzY0ZmRlYWYyNDZjZmMyNWZiZTc1NiIsInVzZXJfaWQiOjcxOX0.0crrAoZHgW0W81FZR5wqcL_SdvcYP7m6seKxQe1VY94"}`,
            }
        })
            .then(() => getGoals())
            .catch(err => console.log(err))
    }

    const patchGoal = () => {
        //Lembrar de mandar o que ta sendo enviado "dataGoal"
        //Lembrar de passar o Id do goal
        //Lembrar de passar o token
        const dataGoalUpdate = {
            "achieved": true
          }

        api.patch("/goals/1576/", dataGoalUpdate, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzAxNzg2LCJqdGkiOiJiMTg0YzE3MTQ2YzY0ZmRlYWYyNDZjZmMyNWZiZTc1NiIsInVzZXJfaWQiOjcxOX0.0crrAoZHgW0W81FZR5wqcL_SdvcYP7m6seKxQe1VY94"}`,
            }
        })
            .then(() => getGoals())
            .catch(err => console.log(err))
    }

    const deleteGoal = () => {
        //Lembrar de passar o Id do goal
        //Lembrar de passar o token

        api.delete("/goals/1577/", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzAxNzg2LCJqdGkiOiJiMTg0YzE3MTQ2YzY0ZmRlYWYyNDZjZmMyNWZiZTc1NiIsInVzZXJfaWQiOjcxOX0.0crrAoZHgW0W81FZR5wqcL_SdvcYP7m6seKxQe1VY94"}`,
            }
        })
            .then(() => getGoals())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getGoals();
    }, []);

    return(
        <GoalsContext.Provider value={{goals, getGoals, postGoal, patchGoal, deleteGoal}}>
            {children}
        </GoalsContext.Provider>
    )
}