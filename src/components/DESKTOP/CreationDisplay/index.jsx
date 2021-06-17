import { BackgroundContainer, CreationSection, CreationDivisor } from './styled'
import { IoClose } from "react-icons/io5";

import HabitCreation from '../../HabitCreation'
import GroupCreation from "../../GroupCreation";
import GoalsCreation from "../../GoalsCreation";
import AtivityCreation from "../../ActivityCreation";

const CreationDisplay = ({ close, type }) => {
  console.log(type)
  return(
    <BackgroundContainer>
      <CreationSection type={type}>
        <h2>Criação de {type}</h2>
        <IoClose onClick={() => close(false)}/>
        <CreationDivisor>
          {type === 'Habito' && <HabitCreation />}
          {type === 'Grupo' && <GroupCreation />}
          {type === 'Meta' && <GoalsCreation />}
          {type === 'Atividade' && <AtivityCreation />}
        </CreationDivisor>
      </CreationSection>
    </BackgroundContainer>
  )
}

export default CreationDisplay