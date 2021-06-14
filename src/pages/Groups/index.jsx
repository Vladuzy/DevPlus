import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainDashboard, HeaderContainer, MainContainer, NavContainer, AnimationContainer, MainMenuContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import GroupList from '../../components/GroupList'
import InputSearch from '../../components/InputSearch'

const Groups = () => {
  const [selected, setSelected] = useState('todos')
  const [searchGroups, setSearchGroups] = useState('')
  let { path, url } = useRouteMatch('');

  const handleAnimation = (value) => {
    setSelected(value)
  }

  const searchGroup = (e) => {
    setSearchGroups(e.target.value)
    console.log(searchGroups)
  }

  return(
    <MainDashboard back-color="yellow">
    <HeaderContainer>
    <h2>Grupos</h2>
    </HeaderContainer>
    <MainContainer>
      <MainMenuContainer>
        <NavContainer>

        <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <Link to={`${url}`} onClick={() => handleAnimation('todos')} >
              TODOS
              { selected === 'todos' && <AnimationContainer border-color="yellow" layoutId="underline"/>}
            </Link>
            <Link to={`${url}/mine`} onClick={() => handleAnimation('meus')}>
              MEUS
              { selected === 'meus' && <AnimationContainer border-color="yellow" layoutId="underline"/>}
            </Link>
          </AnimateSharedLayout>
        </NavContainer>
        <InputSearch placeholder='pesquisar' onChange={searchGroup}/>
        <Switch>
          <Route exact path={`${path}`}>
            <GroupList allGroups={true} search={searchGroups}/>
          </Route>
          <Route path={`${path}/mine`}>
          <GroupList/>
          </Route>
        </Switch>
      </MainMenuContainer>
    </MainContainer>
  </MainDashboard>
  )
}

export default Groups