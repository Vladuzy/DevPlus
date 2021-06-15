import {
  HeaderContainer,
  MainContainer,
  BackgroundContainer,
  TitleEditingContainer,
  DividerContainer,
} from "./styles";

import { IoIosArrowBack } from "react-icons/io";

import { useHistory } from "react-router-dom";

import HabitEdition from "../../components/HabitEdition";
import GroupEdition from '../../components/GroupEdition'

const EditionPage = ({ type, id }) => {
  const history = useHistory();
  type = "Grupo";

  return (
    <BackgroundContainer>
      <HeaderContainer>
        <h2 onClick={() => history.goBack()}>
          <IoIosArrowBack /> Voltar
        </h2>
      </HeaderContainer>
      <MainContainer>
        <TitleEditingContainer>Edição de {type}</TitleEditingContainer>
        <DividerContainer />

        {type === "Habito" && <HabitEdition />}
        {type === "Grupo" && <GroupEdition />}
      </MainContainer>
    </BackgroundContainer>
  );
};

export default EditionPage;
