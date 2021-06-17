import { HabitsContainer } from "./style";
import HabitsCard from "../HabitsCard";
import { useHabits } from "../../providers/Habits";
import ButtonAdd from "../Buttons/ButtonAdd";
import { useHistory } from "react-router-dom";
import { useRef } from 'react'

const HabitsList = ({ showArchived }) => {
  //ANIMATION
  const limit = useRef(null)

  const history = useHistory();

  const handleHabits = (value) => {
    history.push(value);
  };
  const { doingHabits, updateHabits, deleteHabits } = useHabits();

  return (
    <HabitsContainer ref={limit}>
      {showArchived
        ? doingHabits.map(
            (habit) =>
              habit.achieved && (
                <HabitsCard
                  habit={habit}
                  key={habit.id}
                  updateHabits={updateHabits}
                  deleteHabits={deleteHabits}
                  showArchived={showArchived}
                  limit={limit}
                />
              )
          )
        : doingHabits.map(
            (habit) =>
              habit.achieved === false && (
                <HabitsCard
                  habit={habit}
                  key={habit.id}
                  updateHabits={updateHabits}
                  deleteHabits={deleteHabits}
                  showArchived={showArchived}
                  limit={limit}
                />
              )
          )}
      {!showArchived && (
        <ButtonAdd
          type="Habito"
          onClick={() => handleHabits("/creation/Habito")}
        />
      )}
    </HabitsContainer>
  );
};

export default HabitsList;
