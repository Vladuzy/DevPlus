import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainDashboard, HeaderContainer, MainContainer, NavContainer, AnimationContainer, MainMenuContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import GroupList from '../../components/GroupList'

const Groups = () => {
  const [selected, setSelected] = useState('todos')
  let { path, url } = useRouteMatch('');

  return(
    <MainDashboard>
    <HeaderContainer>
    <h2>Grupos</h2>
    </HeaderContainer>
    <MainContainer>
      <MainMenuContainer>
        <NavContainer>

        <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <Link to={`${url}`} onClick={() => setSelected('todos')} >
              TODOS
              { selected === 'todos' && <AnimationContainer layoutId="underline"/>}
            </Link>
            <Link to={`${url}/mine`} onClick={() => setSelected('meus')}>
              MEUS
              { selected === 'meus' && <AnimationContainer layoutId="underline"/>}
            </Link>
          </AnimateSharedLayout>
        </NavContainer>

        <Switch>
          <Route exact path={`${path}`}>
            <GroupList allGroups={true}/>
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