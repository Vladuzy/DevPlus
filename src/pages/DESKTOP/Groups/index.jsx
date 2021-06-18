import { 
  MainGroups, 
  MainContainer, 
  SelectContainer, 
  SelectedContainer, 
  GroupsSelectContainer, 
  TitleGroupSelectContainer,
  SelectTypeContainer,
  InputsContainer,
  GroupsScrollContainer
} from './styles'
import Header from '../../../components/DESKTOP/Header'
import DisplayPopUp from '../../../components/DESKTOP/DisplayPopUp'
import ListGroups from '../../../components/DESKTOP/ListGroups'
import InputSearch from '../../../components/InputSearch'
import SpecificGroupDesktop from '../SpecificGroup'

import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { useGroups } from '../../../providers/Groups'
import { useAuth } from "../../../providers/AuthProvider";
import { Redirect } from "react-router-dom";

import { Scrollbars } from 'react-custom-scrollbars-2';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: 'var(--cinza-escuro)'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

const GroupsDesktop = () => {
  const { groups, groupsSubs } = useGroups();

  const [type, setType] = useState('')
  const [creationOpen, setCreationOpen] = useState(false)
  
  const [groupsType, setGroupsType] = useState('All')
  const [search, setSearch] = useState('')

  let { path, url } = useRouteMatch()
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
            <GroupsScrollContainer id='GroupsScroll' style={{ height: 'calc(88vh - 130px)', overflow: "auto" }}>
              <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200} >
                <InfiniteScroll
                  dataLength={type === 'All' ? groups.length : groupsSubs.length}
                  scrollableTarget='GroupsScroll'
                >
                  <ListGroups values={groupsType} search={search} url={url}/>  
                </InfiniteScroll>
              </CustomScrollbars>
            </GroupsScrollContainer>
          </GroupsSelectContainer>
        </SelectContainer>

        <SelectedContainer>
          <Switch>
            <Route path={`${path}/:name/:subscribe`}>
              <SpecificGroupDesktop setType={setType} setCreationOpen={setCreationOpen} groupsType={groupsType}/>
            </Route>
          </Switch>
        </SelectedContainer>

      </MainContainer>
    </MainGroups>
    </>
  )
}

export default GroupsDesktop