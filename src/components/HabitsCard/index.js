import { useContext } from "react";
import { useHabits } from "../../providers/Habits";
import {
  HabitCardContainer,
  HabitCardTitle,
  HabitCardUl,
  HabitCardLi,
} from "./style";

const HabitsCard = () => {
  const { doingHabits } = useHabits();
  console.log(doingHabits);

  return (
    <div>
      {doingHabits.map((item, index) => (
        <HabitCardContainer key={index}>
          <HabitCardTitle>{item.title}</HabitCardTitle>
          <HabitCardUl>
            <HabitCardLi>{item.difficulty}</HabitCardLi>
            <HabitCardLi>{item.category}</HabitCardLi>
          </HabitCardUl>
        </HabitCardContainer>
      ))}
    </div>
  );
};

export default HabitsCard;
