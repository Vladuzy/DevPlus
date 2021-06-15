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

const CreationPage = ({ type, id }) => {
  const history = useHistory()
  type = 'Habito'

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
      </MainContainer>
    </BackgroundContainer>
  );
};

export default CreationPage;
