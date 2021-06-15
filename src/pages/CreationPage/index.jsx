import {
  HeaderContainer,
  MainContainer,
  BackgroundContainer,
  TitleCreatingContainer,
  DividerContainer,
} from "./styles";

import { IoIosArrowBack } from "react-icons/io";

import { useHistory } from "react-router-dom";

import GroupCreation from "../../components/GroupCreation";
import HabitCreation from "../../components/HabitCreation";
import GoalsCreation from "../../components/GoalsCreation";
import AtivityCreation from "../../components/AtivityCreation";

const CreationPage = ({ type, id }) => {
  const history = useHistory()
  type = 'Atividade'

  return (
    <BackgroundContainer>
      <HeaderContainer>
        <h2 onClick={() => history.goBack()}>
          <IoIosArrowBack /> Voltar
        </h2>
      </HeaderContainer>
      <MainContainer>
        <TitleCreatingContainer>Criação de {type}</TitleCreatingContainer>
        <DividerContainer />
        {type === "Grupo" && <GroupCreation />}
        {type === "Habito" && <HabitCreation />}
        {type === "Meta" && <GoalsCreation />}
        {type === "Atividade" && <AtivityCreation />}
      </MainContainer>
    </BackgroundContainer>
  );
};

export default CreationPage;
