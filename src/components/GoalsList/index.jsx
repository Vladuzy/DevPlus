import { GoalsListContainer } from "./style";

import GoalCard from "../GoalCard"

import { useContext } from "react";

import { GoalsContext } from "../../providers/Goals";


const GoalsList = () => {

    //Da para listar os achieved true ou false (botões para ficar alternando)

    const {goals, patchGoal} = useContext(GoalsContext);

    return(
        <GoalsListContainer>
            {
                goals.map( goal => 
                    (goal.achieved === false) && 
                        (
                            <GoalCard
                                goal = {goal}
                                patchGoal = {patchGoal}
                            />
                        )
                )
            }
            {/* {
                goals.map( goal => 
                    (goal.achieved) && 
                        (
                            <GoalCard
                                goal = {goal}
                                patchGoal = {patchGoal}
                            />
                        )
                )
            } */}
        </GoalsListContainer>
    )
}

export default GoalsList;