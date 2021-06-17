import { 
  MainGroups, 
  MainContainer, 
  SelectContainer, 
  SelectedContainer, 
  GroupsSelectContainer, 
  TitleGroupSelectContainer,
  SelectTypeContainer,
  InputsContainer,
  TitleSelectedContainer,
  SomethingSelectedContainer,
  TitleSomethingSelectedContainer,
  GroupContentContainer,
  ContentContainer
} from './styles'
import Header from '../../../components/DESKTOP/Header'
import InputSearch from '../../../components/InputSearch'
import Button from '../../../components/Buttons/Button'

import { CgEnter } from 'react-icons/cg'
import { IoIosAddCircle, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from 'react'
import CardGroups from '../../../components/DESKTOP/CardGroups'

const GroupsDesktop = () => {
  const [groupsType, setGroupsType] = useState('All')
  const pertenceAoGrupo = false

  return(
    <MainGroups type={groupsType}>
      <Header type={groupsType}/>
      <MainContainer>

        <SelectContainer>
          <GroupsSelectContainer>
            <TitleGroupSelectContainer>
              <h2>GRUPOS</h2> 
              <InputsContainer type={groupsType}>
                <InputSearch placeholder='Pesquisar...'/>
                <SelectTypeContainer onChange={(e) => setGroupsType(e.target.value)}>
                  <option value="All">TODOS</option>
                  <option value="Mine">MEUS</option>
                </SelectTypeContainer>
              </InputsContainer>
            </TitleGroupSelectContainer>
            <CardGroups/>
          </GroupsSelectContainer>
        </SelectContainer>

        <SelectedContainer>
        
          <TitleSelectedContainer group={pertenceAoGrupo}>
            { pertenceAoGrupo ? <Button><IoIosAddCircle />Criar Grupo</Button> : <Button>Entrar no Grupo <CgEnter /></Button>}
            <h2>Nome do Grupo</h2>
          </TitleSelectedContainer>
          <SomethingSelectedContainer>
            <TitleSomethingSelectedContainer>
              <h2>ATIVIDADES</h2>
              { pertenceAoGrupo && <Button><IoIosAddCircle />Nova Atividade</Button>}
            </TitleSomethingSelectedContainer>
            <GroupContentContainer type={groupsType}>
              <IoIosArrowDropleftCircle />
              <ContentContainer>
                <p>ATIVIDADES VEM AQUI</p>
              </ContentContainer>
              <IoIosArrowDroprightCircle />
            </GroupContentContainer>
          </SomethingSelectedContainer>

          <SomethingSelectedContainer>
            <TitleSomethingSelectedContainer meta>
              <h2>METAS</h2>
              { pertenceAoGrupo && <Button><IoIosAddCircle />Nova Meta</Button>}
            </TitleSomethingSelectedContainer>
            <GroupContentContainer type={groupsType}>
              <IoIosArrowDropleftCircle />
              <ContentContainer>
                <p>METAS VEM AQUI</p>
              </ContentContainer>
              <IoIosArrowDroprightCircle />
            </GroupContentContainer>
          </SomethingSelectedContainer>

        </SelectedContainer>

      </MainContainer>
    </MainGroups>
  )
}

export default GroupsDesktop