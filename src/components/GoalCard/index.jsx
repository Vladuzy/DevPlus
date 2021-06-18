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
  ContainerTitle,
  ContainerActivies,
} from "./style";
import ButtonEdit from "../Buttons/ButtonEdit";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useViewport } from "../../providers/GetViewport";

import { useAuth } from "../../providers/AuthProvider";
import { useGoals } from "../../providers/Goals";
import { useMotionValue, useTransform } from "framer-motion";
import DisplayPopUp from "../DESKTOP/DisplayPopUp";
import { useState } from "react";

const GoalCard = ({ goal, patchGoal, deleteGoal, showArchived, limit }) => {
  //Desestruturar
  //Tentar fazer uma barrinha em função de 100%
  //Lembrar de limitar o tamanho do titulo
  //Progresso de 0 a 100
  //Limitar Dificuldade
  //Verificar se está escrito
  const history = useHistory();
  const { isSubscribe } = useAuth();
  const { getOneGoal } = useGoals();
  const {
    viewport: { width },
  } = useViewport();

  const [type, setType] = useState("");
  const [edit, setEdit] = useState(false);
  const [creationOpen, setCreationOpen] = useState(false);

  const handleEditionGoal = () => {
    getOneGoal(id);
    setTimeout(function () {
      history.push(`/edition/Meta/${id}`);
    }, 700);
  };

  const { id, title, difficulty, how_much_achieved } = goal;

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
      showArchived ? patchGoal(goal, "activate") : patchGoal(goal, "archieved");
    } else if (x < -170) {
      deleteGoal(goal);
    }
  };

  return (
    <>
      {width < 768 ? (
        <GoalCardContainer
          key={id}
          drag="x"
          dragConstraints={limit}
          dragElastic={0.3}
          style={{ x, background, opacity }}
          onDragEnd={(e, info) => handleEventDrag(e, info)}
        >
          {creationOpen && (
            <DisplayPopUp
              cardId={id}
              close={setCreationOpen}
              edit={edit}
              type={type}
            />
          )}
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
                  {width > 768 ? (
                    <ButtonEdit
                      className="ButtonEdit"
                      onClick={() => {
                        setEdit(true);
                        setType("Meta");
                        setCreationOpen(true);
                      }}
                    ></ButtonEdit>
                  ) : (
                    <ButtonEdit
                      className="ButtonEdit"
                      onClick={() => {
                        handleEditionGoal();
                      }}
                    ></ButtonEdit>
                  )}
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
      ) : (
        <GoalCardContainer>
          {isSubscribe ? (
            <>
              <ContainerActivies>
                <ContainerTitle>
                  <ButtonEdit
                    className="ButtonEdit"
                    onClick={() => {
                      handleEditionGoal();
                    }}
                  ></ButtonEdit>
                </ContainerTitle>
                <InfoContainer>
                  <TitleCategory>
                    <CategoryContainer>{title}</CategoryContainer>
                    <p>{difficulty}</p>
                  </TitleCategory>
                  <ProgressBar progress={how_much_achieved}>
                    <span></span>
                  </ProgressBar>
                </InfoContainer>
              </ContainerActivies>
              {showArchived ? (
                <ButtonUncheck onClick={() => patchGoal(goal, "activate")}>
                  <h2>VOLTAR</h2>
                </ButtonUncheck>
              ) : (
                <ButtonConluds>
                  <ButtonClose onClick={() => deleteGoal(goal)}>
                    <h2>DELETAR</h2>
                  </ButtonClose>
                  <ButtonCheck onClick={() => patchGoal(goal, "archieved")}>
                    <h2>FEITO</h2>
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
      )}
    </>
  );
};

export default GoalCard;
