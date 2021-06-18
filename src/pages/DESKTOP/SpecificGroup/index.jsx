import { CgEnter } from 'react-icons/cg'
import { IoIosAddCircle } from "react-icons/io";
import Button from '../../../components/Buttons/Button'
import CardGroups from '../../../components/DESKTOP/CardGroups'
import { useParams } from 'react-router-dom'
import ButtonExitGroup from "../../../components/Buttons/ButtonExitGroup"
import {
TitleSelectedContainer,
SomethingSelectedContainer,
TitleSomethingSelectedContainer,
GroupContentContainer,
ContentContainer
} from './styles'
import { useEffect } from 'react';
import { useGroups } from '../../../providers/Groups';
import { useAuth } from '../../../providers/AuthProvider';
import { useHistory } from 'react-router';
import ActivityList from "../../../components/ActivityList"
import GroupActivities from '../../GroupActivities';
import GroupGoals from '../../GroupGoals';
import ButtonEditGroup from '../../../components/Buttons/ButtonEditGroup';


const SpecificGroupDesktop = ({ setEdit, setCreationOpen, setType, groupsType }) => {
  const { name, subscribe } = useParams()
  const { setIsSubscribe, isSubscribe, id  } = useAuth();
  const { unsubscribe, subsInAGroup, groupCreatorId} = useGroups();

  const history = useHistory();
  const handleExitGroup = (value) => {
    unsubscribe();
    history.push(value);
  };
  const handleOpenGroup = (value) => {
    subsInAGroup();
    history.push(value);
  };
  const pertenceAoGrupo = false


  useEffect(() => {
    if (subscribe === "true") {
      setIsSubscribe(true);
    } else {
      setIsSubscribe(false);
    }
  }, []);


  const handleEditGroup = (value) => {
    history.push(value);
  };

  return(
    <>
      <TitleSelectedContainer group={pertenceAoGrupo}>
            { subscribe === "true" ? 
            <Button onClick={() => handleExitGroup("/groups/all")}>
            Sair do Grupo <CgEnter />
          </Button>
            : 
            <Button  onClick={() => handleOpenGroup("/groups/all")}>
            Entrar no Grupo <CgEnter />
          </Button> 
          }
            <h2>{name}</h2>
            {
              (isSubscribe && groupCreatorId === id) && (
                <ButtonEditGroup 
                onClick={() => {
                  setEdit(true);
                  setType("Grupo");
                  setCreationOpen(true);
                }}
              />
              ) 
            }
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
                {/* <ActivityList/> */}
                <GroupActivities />
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
                <GroupGoals />
              </ContentContainer>
            </GroupContentContainer>
      </SomethingSelectedContainer>
    </>
  )
}

export default SpecificGroupDesktop