import {
  GoalCardContainer,
  InfoContainer,
  ButtonClose,
  ButtonCheck,
  TitleCategory,
  ButtonUncheck,
  CategoryContainer,
  ButtonConluds,
  ProgressBar,
} from "./style";
import ButtonEdit from "../Buttons/ButtonEdit";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../providers/AuthProvider";
import { useGoals } from "../../providers/Goals";
import { useMotionValue, useTransform } from 'framer-motion'
const GoalCard = ({ goal, patchGoal, deleteGoal, showArchived,limit }) => {

  //Desestruturar
  //Tentar fazer uma barrinha em função de 100%
  //Lembrar de limitar o tamanho do titulo
  //Progresso de 0 a 100
  //Limitar Dificuldade
  //Verificar se está escrito
  const history = useHistory();
  const { isSubscribe } = useAuth();
  const { getOneGoal } = useGoals();
  const handleEditionGoal = (value) => {
    history.push(value);
  };

  const { id, title, difficulty, how_much_achieved } = goal;

  //ANIMATION
  const x = useMotionValue(0)
  const xInput = [-100, 0, 100]
  const opacityOutput = [0.7, 1, 0.7]
  const colorOutput = showArchived ? ["#F8565D", "#30444D", "#FBC442"] : ["#F8565D", "#30444D", "#3DD598"]
  const opacity = useTransform(x, xInput, opacityOutput)
  const background = useTransform(x, xInput, colorOutput)

  const handleEventDrag = (_, info) => {
    const { offset: { x } } = info
    if (x > 170) {
      showArchived ? patchGoal(goal, "activate") : patchGoal(goal, "archieved")
      
    } else if (x < -170) {
      deleteGoal(goal)
    }
  }


  return (
    <GoalCardContainer 
      key={id}
      drag='x'
      dragConstraints={limit}
      dragElastic={0.3}
      style={{ x, background, opacity }}
      onDragEnd={(e, info) => handleEventDrag(e, info)}
    >
      {isSubscribe ? (
        <>
          <ButtonClose onClick={() => deleteGoal(goal)}>
            <IoClose className="close" />
          </ButtonClose>
          <InfoContainer>
            <TitleCategory>
              <CategoryContainer>{title}</CategoryContainer>
              <p>{difficulty}</p>
            </TitleCategory>
            <ProgressBar progress={how_much_achieved}>
              <span></span>
            </ProgressBar>
          </InfoContainer>
          {showArchived ? (
            <ButtonUncheck onClick={() => patchGoal(goal, "activate")}>
              <RiArrowGoBackLine className="uncheck" />
            </ButtonUncheck>
          ) : (
            <ButtonConluds>
              <ButtonEdit
                className="ButtonEdit"
                onClick={() =>   { handleEditionGoal(`/edition/Meta/${id}`)}}
              ></ButtonEdit>
              <ButtonCheck onClick={() => patchGoal(goal, "archieved")}>
                <FaCheck className="check" />
              </ButtonCheck>
            </ButtonConluds>
          )}
        </>
      ) : (
        <InfoContainer>
          <TitleCategory>
            <CategoryContainer>{title}</CategoryContainer>
            <p>{difficulty}</p>
          </TitleCategory>
          <ProgressBar progress={how_much_achieved}>
            <span></span>
          </ProgressBar>
        </InfoContainer>
      )}
    </GoalCardContainer>
  );
};

export default GoalCard;
