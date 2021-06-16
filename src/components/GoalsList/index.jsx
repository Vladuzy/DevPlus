import { GoalsListContainer } from "./style";

import GoalCard from "../GoalCard";

import { useContext } from "react";
import ButtonAdd from "../Buttons/ButtonAdd";

import { GoalsContext } from "../../providers/Goals";
import { useHistory, useParams } from "react-router-dom";

const GoalsList = ({ showArchived }) => {
  //Da para listar os achieved true ou false (botões para ficar alternando)
  const history = useHistory();
  const handleGoals = (value) => {
    history.push(value);
  };

  const { goals, patchGoal, deleteGoal } = useContext(GoalsContext);

  return (
    <GoalsListContainer>
      {showArchived
        ? goals.map(
            (goal) =>
              goal.achieved && (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  patchGoal={patchGoal}
                  deleteGoal={deleteGoal}
                  showArchived={showArchived}
                />
              )
          )
        : goals.map(
            (goal) =>
              goal.achieved === false && (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  patchGoal={patchGoal}
                  deleteGoal={deleteGoal}
                  showArchived={showArchived}
                />
              )
          )}

          {!showArchived && (
            <ButtonAdd type="Atividade" onClick={() => handleGoals("/creation/Meta")} />
          )}
    </GoalsListContainer>
  );
};

export default GoalsList;
