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
import DisplayPopUp from '../../../components/DESKTOP/DisplayPopUp'
import ListGroups from '../../../components/DESKTOP/ListGroups'
import { useAuth } from "../../../providers/AuthProvider";
import { Redirect } from "react-router-dom";

const GroupsDesktop = () => {
  const [creationOpen, setCreationOpen] = useState(false)
  const [type, setType] = useState('')
  const [groupsType, setGroupsType] = useState('All')
  const [search, setSearch] = useState('')
  const pertenceAoGrupo = false
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }


  const serchName = (e) => {
    setSearch(e.target.value)
  }

  return(
    <>
    {creationOpen && <DisplayPopUp close={setCreationOpen} type={type}/>}
    <MainGroups type={groupsType}>
      <Header type={groupsType}/>
      <MainContainer>

        <SelectContainer>
          <GroupsSelectContainer>
            <TitleGroupSelectContainer>
              <h2>GRUPOS</h2> 
              <InputsContainer type={groupsType}>
                <InputSearch placeholder='Pesquisar...' onChange={serchName}/>
                <SelectTypeContainer onChange={(e) => setGroupsType(e.target.value)}>
                  <option value="All">TODOS</option>
                  <option value="Mine">MEUS</option>
                </SelectTypeContainer>
              </InputsContainer>
            </TitleGroupSelectContainer>
            <ListGroups values={groupsType} search={search}/>
          </GroupsSelectContainer>
        </SelectContainer>

        <SelectedContainer>
        
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
    </>
  )
}

export default GroupsDesktop