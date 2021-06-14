import { HeaderContainer, MainContainer, BackgroundContainer, TitleCreatingContainer, DividerContainer } from './styles'

import { IoIosArrowBack } from 'react-icons/io'

import { useHistory } from 'react-router-dom'

import GroupCreation from '../../components/GroupCreation'
import HabitCreation from '../../components/HabitCreation'

const CreationPage = ({ type }) => {
  const history = useHistory()
  type = 'Grupo'

  return(
  <BackgroundContainer>
    <HeaderContainer>
      <h2 onClick={() => history.goBack()}><IoIosArrowBack /> Voltar</h2>
    </HeaderContainer>
    <MainContainer>
      <TitleCreatingContainer>
      Criação de {type}
      </TitleCreatingContainer>
      <DividerContainer />
      {type === 'Grupo' && <GroupCreation />}
      {type === 'Habito' && <HabitCreation />}
    </MainContainer>
  </BackgroundContainer>
  )
}

export default CreationPage