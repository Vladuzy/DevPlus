import { HabitsContainer } from "./style";
import HabitsCard from "../HabitsCard";
import { useHabits } from "../../providers/Habits";
import ButtonAdd from "../ButtonAdd";
import { useHistory } from "react-router-dom";

const HabitsList = ({ showArchived }) => {
  const history = useHistory();

  const handleHabits = (value) => {
    history.push(value);
  };
  const { doingHabits, updateHabits, deleteHabits } = useHabits();

  return (
    <HabitsContainer>
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
                />
              )
          )}
      {showArchived ? (
        <ButtonAdd onClick={() => handleHabits("/edition/Habito")} />
      ) : (
        <ButtonAdd onClick={() => handleHabits("/creation/Habito")} />
      )}
    </HabitsContainer>
  );
};

export default HabitsList;
