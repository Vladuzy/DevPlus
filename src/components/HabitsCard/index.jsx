import {
  HabitCardContainer,
  ButtonClose,
  InfoContainer,
  FlexContainer,
  DificultyContainer,
  ButtonCheck,
  TitleContainer,
  ButtonUncheck,
  TitleHardSkill,
  ProgressBar,
} from "./style";
import ButtonEdit from "../Buttons/ButtonEdit";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const HabitsCard = ({ habit, updateHabits, deleteHabits, showArchived }) => {
  const { id, title, category, difficulty, frequency, how_much_achieved } =
    habit;
  console.log(difficulty);

  const history = useHistory();

  const handleEditionHabits = (value) => {
    history.push(value);
  };

  return (
    <HabitCardContainer key={id}>
      <ButtonClose onClick={() => deleteHabits(habit)}>
        <IoClose className="close" />
      </ButtonClose>
      <InfoContainer>
        <TitleContainer>{title}</TitleContainer>
        <FlexContainer>
          <DificultyContainer difficulty={difficulty}>
            {" "}
            {difficulty.toUpperCase()}
          </DificultyContainer>
          <TitleHardSkill>{category}</TitleHardSkill>
        </FlexContainer>
        {/* <h5>{frequency}</h5>
        <ProgressBar progress={how_much_achieved}>
          <span></span>
        </ProgressBar> */}
      </InfoContainer>
      <ButtonEdit
        onClick={() => handleEditionHabits(`/edition/Habito/${id}`)}
      ></ButtonEdit>
      {showArchived ? (
        <ButtonUncheck onClick={() => updateHabits(habit, "activate")}>
          <RiArrowGoBackLine className="uncheck" />
        </ButtonUncheck>
      ) : (
        <ButtonCheck onClick={() => updateHabits(habit, "archieved")}>
          <FaCheck className="check" />
        </ButtonCheck>
      )}
    </HabitCardContainer>
  );
};

export default HabitsCard;
