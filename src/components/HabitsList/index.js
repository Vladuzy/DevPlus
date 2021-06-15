import { HabitsContainer } from "./style";
import HabitsCard from "../HabitsCard";
import { useHabits } from "../../providers/Habits";

const HabitsList = ({showArchived}) => {

  const { doingHabits, updateHabits, deleteHabits } = useHabits();

  return (
    <HabitsContainer>
        {
            (showArchived)? (
              doingHabits.map( habit => 
                    (habit.achieved) && 
                        (
                          <HabitsCard
                          habit={habit}
                          key={habit.id}
                          updateHabits={updateHabits}
                          deleteHabits={deleteHabits}
                          showArchived={showArchived}
                          />
                        )
                )
            ) : (
              doingHabits.map( habit =>
                    (habit.achieved === false) && 
                        (
                          <HabitsCard
                          habit={habit}
                          key={habit.id}
                          updateHabits={updateHabits}
                          deleteHabits={deleteHabits}
                          showArchived={showArchived}
                          />
                        )
                )
            )
        }
    </HabitsContainer>
  );
};

export default HabitsList;
