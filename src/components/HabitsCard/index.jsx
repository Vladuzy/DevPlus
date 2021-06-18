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
  ContainerButtons,
  ContainerTitle,
  ContainerCenterBack,
  ProgressBar,
} from "./style";
import ButtonEdit from "../Buttons/ButtonEdit";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useViewport } from "../../providers/GetViewport";
import { useHabits } from "../../providers/Habits";

import { useMotionValue, useTransform } from "framer-motion";

const HabitsCard = ({
  habit,
  updateHabits,
  deleteHabits,
  showArchived,
  limit,
  setCreationOpen,
  setEdit,
}) => {
  const { id, title, category, difficulty, frequency, how_much_achieved } =
    habit;
  const history = useHistory();
  const {
    viewport: { width },
  } = useViewport();
  const { getOneHabit, habitId, setHabitId } = useHabits();

  //ANIMATION
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const opacityOutput = [0.7, 1, 0.7];
  const colorOutput = showArchived
    ? ["#F8565D", "#30444D", "#FBC442"]
    : ["#F8565D", "#30444D", "#3DD598"];
  const opacity = useTransform(x, xInput, opacityOutput);
  const background = useTransform(x, xInput, colorOutput);

  const handleEventDrag = (_, info) => {
    const {
      offset: { x },
    } = info;
    if (x > 170) {
      showArchived
        ? updateHabits(habit, "activate")
        : updateHabits(habit, "archieved");
    } else if (x < -170) {
      deleteHabits(habit);
    }
  };

  const handleEditionHabits = () => {
    getOneHabit(id);
    setTimeout(function () {
      history.push(`/edition/Habito/${id}`);
    }, 700);
  };

  const handleEditionHabit = () => {
    setCreationOpen(true);
    setEdit(true);
    setHabitId(id);
    history.push("/dashboard");
  };

  return (
    <>
      {width < 768 ? (
        <HabitCardContainer
          key={id}
          drag="x"
          dragConstraints={limit}
          dragElastic={0.3}
          style={{ x, background, opacity }}
          onDragEnd={(e, info) => handleEventDrag(e, info)}
        >
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

          {showArchived ? (
            <ButtonUncheck onClick={() => updateHabits(habit, "activate")}>
              <RiArrowGoBackLine className="uncheck" />
            </ButtonUncheck>
          ) : (
            <>
              <ButtonEdit
                onClick={() => handleEditionHabits(`/edition/Habito/${id}`)}
              ></ButtonEdit>
              <ButtonCheck onClick={() => updateHabits(habit, "archieved")}>
                <FaCheck className="check" />
              </ButtonCheck>
            </>
          )}
        </HabitCardContainer>
      ) : (
        <HabitCardContainer key={id}>
          <InfoContainer>
            <ContainerTitle>
              <TitleContainer>{title}</TitleContainer>
              <ButtonEdit
                onClick={() => {
                  handleEditionHabit();
                }}
              ></ButtonEdit>
            </ContainerTitle>
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

          {showArchived ? (
            <ContainerCenterBack>
              <ButtonUncheck onClick={() => updateHabits(habit, "activate")}>
                <h2>VOLTAR</h2>
              </ButtonUncheck>
            </ContainerCenterBack>
          ) : (
            <ContainerButtons>
              <ButtonCheck onClick={() => updateHabits(habit, "archieved")}>
                <h2>FEITO</h2>
              </ButtonCheck>
              <ButtonClose onClick={() => deleteHabits(habit)}>
                <h2>DELETAR</h2>
              </ButtonClose>
            </ContainerButtons>
          )}
        </HabitCardContainer>
      )}
    </>
  );
};

export default HabitsCard;
