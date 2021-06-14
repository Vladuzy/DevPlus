import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainDashboard, HeaderContainer, MainContainer, NavContainer, AnimationContainer, MainMenuContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import GroupsCard from '../../components/GroupsCard'

const Groups = () => {
  const [selected, setSelected] = useState('todos')
  let { path, url } = useRouteMatch('');

  const handleAnimation = (value) => {
    setSelected(value)
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

        <Switch>
          <Route exact path={`${path}`}>
            <GroupsCard/>
          </Route>
          <Route path={`${path}/mine`}>
            <p>TODOS OS MEUS GRUPOS AQUI</p>
          </Route>
        </Switch>
      </MainMenuContainer>
    </MainContainer>
  </MainDashboard>
  )
}

export default Groups