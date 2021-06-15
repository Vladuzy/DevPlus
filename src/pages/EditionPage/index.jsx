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

const EditionPage = ({ type, id }) => {
  const history = useHistory();
  type = "Habito";

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
      </MainContainer>
    </BackgroundContainer>
  );
};

export default EditionPage;
