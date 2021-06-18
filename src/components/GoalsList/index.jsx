import { GoalsListContainer } from "./style";
import GoalCard from "../GoalCard";
import { useContext } from "react";
import ButtonAdd from "../Buttons/ButtonAdd";
import { GoalsContext } from "../../providers/Goals";
import { useHistory } from "react-router-dom";
import {useAuth} from "../../providers/AuthProvider"
import { useRef } from "react";
import { useViewport } from '../../providers/GetViewport'
import InfiniteScroll from "react-infinite-scroll-component";

const GoalsList = ({ showArchived }) => {
  const { viewport: { width } } = useViewport()
  //ANIMATION
  const limit = useRef(null)
  //Da para listar os achieved true ou false (botões para ficar alternando)
  const history = useHistory();
  const handleGoals = (value) => {
    history.push(value);
  };

  const { goals, patchGoal, deleteGoal } = useContext(GoalsContext);
  const {isSubscribe} = useAuth();
  const active = goals.filter(goal => goal.achieved === false).length
  const done = goals.filter(goal => goal.achieved === true).length

  return (
    
    <GoalsListContainer ref={limit} >
      {width < 769 ?
       showArchived
       ? goals.map(
           (goal) =>
             goal.achieved && (
               <GoalCard
                 key={goal.id}
                 goal={goal}
                 patchGoal={patchGoal}
                 deleteGoal={deleteGoal}
                 showArchived={showArchived}
                 limit={limit}
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
                 limit={limit}
               />
             )
         )
        : 
        <InfiniteScroll
          dataLength={showArchived ? done : active}
          height={"100%"}
          width={"100%"}
        >
          {showArchived ? goals.map(
           (goal) =>
             goal.achieved && (
               <GoalCard
                 key={goal.id}
                 goal={goal}
                 patchGoal={patchGoal}
                 deleteGoal={deleteGoal}
                 showArchived={showArchived}
                 limit={limit}
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
                 limit={limit}
               />
             )
         )}

        </InfiniteScroll>
        
        }

          { (!showArchived && isSubscribe && width < 769) && (
            <ButtonAdd type="Atividade" onClick={() => handleGoals("/creation/Meta")} />
          )}
    </GoalsListContainer>
  );
};

export default GoalsList;
