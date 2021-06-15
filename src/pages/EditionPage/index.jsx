import {
  HeaderContainer,
  MainContainer,
  BackgroundContainer,
  TitleEditingContainer,
  DividerContainer,
} from "./styles";

import { IoIosArrowBack } from "react-icons/io";

import { useHistory, useParams } from "react-router-dom";

import HabitEdition from "../../components/HabitEdition";
import GroupEdition from "../../components/GroupEdition";

const EditionPage = ({ id }) => {
  const { habitId, type } = useParams();
  const history = useHistory();

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

        {type === "Habito" && <HabitEdition habitId={habitId} />}
        {type === "Grupo" && <GroupEdition />}
      </MainContainer>
    </BackgroundContainer>
  );
};

export default EditionPage;
