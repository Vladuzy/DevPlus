import { BackgroundContainer, PopUpSection, PopUpDivisor } from './styled'
import { IoClose } from "react-icons/io5";

import HabitCreation from '../../HabitCreation'
import GroupCreation from "../../GroupCreation";
import GoalsCreation from "../../GoalsCreation";
import AtivityCreation from "../../ActivityCreation";

import HabitEdition from '../../HabitEdition'
import GroupEdition from '../../GroupEdition'
import GoalsEdition from '../../GoalsEdition'
import ActivityEdition from '../../ActivityEdition'
import ProfileEdition from '../../ProfileEdition'

const DisplayPopUp = ({ close, type, edit = false }) => {
  return(
    <BackgroundContainer>
      <PopUpSection type={type} edit={edit}>
        <h2>{edit ? 'Edição' : 'Criação'} de {type}</h2>
        <IoClose onClick={() => close(false)}/>
        <PopUpDivisor>
          {type === 'Habito' && (edit ? <HabitEdition /> : <HabitCreation />)}
          {type === 'Grupo' && (edit ? <GroupEdition /> : <GroupCreation />)}
          {type === 'Meta'  && (edit ? <GoalsEdition /> : <GoalsCreation />)}
          {type === 'Atividade'  && (edit ? <ActivityEdition /> : <AtivityCreation />)}
          {(type === 'Profile' && edit) && <ProfileEdition />}
        </PopUpDivisor>
      </PopUpSection>
    </BackgroundContainer>
  )
}

export default DisplayPopUp