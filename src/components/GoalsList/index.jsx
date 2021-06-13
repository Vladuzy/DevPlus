import { GoalsListContainer } from "./style";

import GoalCard from "../GoalCard"

import { useContext } from "react";

import { GoalsContext } from "../../providers/Goals";


const GoalsList = ({showArchived}) => {

    //Da para listar os achieved true ou false (botões para ficar alternando)

    const {goals, patchGoal, deleteGoal} = useContext(GoalsContext);

    return(
        <GoalsListContainer>
            {
                (showArchived)? (
                    goals.map( goal => 
                        (goal.achieved) && 
                            (
                                <GoalCard
                                    key={goal.id}
                                    goal = {goal}
                                    patchGoal = {patchGoal}
                                    deleteGoal = {deleteGoal}
                                    showArchived = {showArchived}
                                />
                            )
                    )
                ) : (
                    goals.map( goal => 
                        (goal.achieved === false) && 
                            (
                                <GoalCard
                                    key={goal.id}
                                    goal = {goal}
                                    patchGoal = {patchGoal}
                                    deleteGoal = {deleteGoal}
                                    showArchived = {showArchived}
                                />
                            )
                    )
                )
            }
        </GoalsListContainer>
    )
}

export default GoalsList;