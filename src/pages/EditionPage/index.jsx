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
import ActivityEdition from "../../components/ActivityEdition";
import GoalsEdition from "../../components/GoalsEdition";
import ProfileEdition from "../../components/ProfileEdition"

const EditionPage = ({ id }) => {
  const { cardId, type } = useParams();
  const history = useHistory();
  return (
    <BackgroundContainer>
      <HeaderContainer>
        {
          (type === "Grupo") ? (
            <h2 onClick={() => history.push("/groups/all")}>
              <IoIosArrowBack /> Voltar
            </h2>
          ) : (
            <h2 onClick={() => history.goBack()}>
              <IoIosArrowBack /> Voltar
            </h2>
          )
        }
      
      </HeaderContainer>
      <MainContainer>
        <TitleEditingContainer>Edição de {type}</TitleEditingContainer>
        <DividerContainer />

        {type === "Habito" && <HabitEdition cardId={cardId} />}
        {type === "Grupo" && <GroupEdition />}
        {type === "Atividade" && <ActivityEdition cardId={cardId} />}
        {type === "Meta" && <GoalsEdition cardId={cardId} />}
        {type === "Username" && <ProfileEdition />}
      </MainContainer>
    </BackgroundContainer>
  );
};

export default EditionPage;
