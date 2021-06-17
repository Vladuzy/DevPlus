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
const GoalCard = ({ goal, patchGoal, deleteGoal, showArchived }) => {
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

  return (
    <GoalCardContainer key={id}>
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
