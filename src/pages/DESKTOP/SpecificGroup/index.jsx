import { CgEnter } from 'react-icons/cg'
import { IoIosAddCircle } from "react-icons/io";
import Button from '../../../components/Buttons/Button'
import CardGroups from '../../../components/DESKTOP/CardGroups'
import { useParams } from 'react-router-dom'

import {
TitleSelectedContainer,
SomethingSelectedContainer,
TitleSomethingSelectedContainer,
GroupContentContainer,
ContentContainer
} from './styles'

const SpecificGroupDesktop = ({ setCreationOpen, setType, groupsType }) => {
  const { id } = useParams()
  
  const pertenceAoGrupo = false

  return(
    <>
      <TitleSelectedContainer group={pertenceAoGrupo}>
            { pertenceAoGrupo ? 
            <Button 
              onClick={() => {
                setCreationOpen(true)
                setType('Grupo')
              }}
            >
              <IoIosAddCircle />Criar Grupo
            </Button> : 
            <Button>
              Entrar no Grupo <CgEnter />
            </Button>}
            <h2>Nome do Grupo</h2>
          </TitleSelectedContainer>
          <SomethingSelectedContainer>
            <TitleSomethingSelectedContainer>
              <h2>ATIVIDADES</h2>
              { pertenceAoGrupo && 
              <Button 
                onClick={() => {
                  setCreationOpen(true)
                  setType('Atividade')
                }}
              >
                <IoIosAddCircle />Nova Atividade
              </Button>}
            </TitleSomethingSelectedContainer>
            <GroupContentContainer type={groupsType}>
              <ContentContainer>
                <p>ATIVIDADES VEM AQUI</p>
              </ContentContainer>
            </GroupContentContainer>
          </SomethingSelectedContainer>

          <SomethingSelectedContainer>
            <TitleSomethingSelectedContainer meta>
              <h2>METAS</h2>
              { pertenceAoGrupo && 
              <Button
                onClick={() => {
                  setCreationOpen(true)
                  setType('Meta')
                }}
              >
                <IoIosAddCircle />Nova Meta
              </Button>}
            </TitleSomethingSelectedContainer>
            <GroupContentContainer type={groupsType}>
              <ContentContainer>
                <p>METAS VEM AQUI</p>
              </ContentContainer>
            </GroupContentContainer>
      </SomethingSelectedContainer>
    </>
  )
}

export default SpecificGroupDesktop