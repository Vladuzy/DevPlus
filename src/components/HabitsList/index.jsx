import { HabitsContainer } from "./style";
import HabitsCard from "../HabitsCard";
import { useHabits } from "../../providers/Habits";
import ButtonAdd from "../Buttons/ButtonAdd";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useViewport } from '../../providers/GetViewport';

const HabitsList = ({ showArchived, setCreationOpen, setEdit }) => {
  //ANIMATION
  const limit = useRef(null);
  const { viewport: { width } } = useViewport()
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
                  setCreationOpen={setCreationOpen}
                  setEdit={setEdit}
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
                  setCreationOpen={setCreationOpen}
                  setEdit={setEdit}
                />
              )
          )}
      {(!showArchived && width < 769) && (
        <ButtonAdd
          type="Habito"
          onClick={() => handleHabits("/creation/Habito")}
        />
      )}
    </HabitsContainer>
  );
};

export default HabitsList;
