import { BackgroundContainer, PopUpSection, PopUpDivisor } from "./styled";
import { IoClose } from "react-icons/io5";

import HabitCreation from "../../HabitCreation";
import GroupCreation from "../../GroupCreation";
import GoalsCreation from "../../GoalsCreation";
import AtivityCreation from "../../ActivityCreation";

import HabitEdition from "../../HabitEdition";
import GroupEdition from "../../GroupEdition";
import GoalsEdition from "../../GoalsEdition";
import ActivityEdition from "../../ActivityEdition";
import ProfileEdition from "../../ProfileEdition";
import { useHabits } from "../../../providers/Habits";

const DisplayPopUp = ({ cardId, setCreationOpen, close, type, edit = false }) => {
  const { habitId } = useHabits();
  return (
    <BackgroundContainer>
      <PopUpSection type={type} edit={edit}>
        <h2>
          {edit ? "Edição" : "Criação"} de {type}
        </h2>
        <IoClose onClick={() => close(false)} />
        <PopUpDivisor>
          {type === "Habito" &&
            (edit ? (
              <HabitEdition
                setCreationOpen={setCreationOpen}
                habitId={habitId}
              />
            ) : (
              <HabitCreation setCreationOpen={setCreationOpen} />
            ))}
          {type === "Grupo" &&
            (edit ? (
              <GroupEdition setCreationOpen={setCreationOpen} />
            ) : (
              <GroupCreation setCreationOpen={setCreationOpen} />
            ))}
          {type === "Meta" &&
            (edit ? (
              <GoalsEdition cardId={cardId} setCreationOpen={setCreationOpen} />
            ) : (
              <GoalsCreation setCreationOpen={setCreationOpen} />
            ))}
          {type === "Atividade" &&
            (edit ? <ActivityEdition cardId={cardId}/> : <AtivityCreation />)}
          {type === "Profile" && edit && <ProfileEdition />}
        </PopUpDivisor>
      </PopUpSection>
    </BackgroundContainer>
  );
};

export default DisplayPopUp;
