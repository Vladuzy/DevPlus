import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainDashboard, HeaderContainer, MainContainer, NavContainer, AnimationContainer, MainMenuContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'
import Habits from '../Habits'

const Dashboard = () => {
  const [selected, setSelected] = useState('ativos')
  let { path, url } = useRouteMatch('');

  return(
    <MainDashboard>
      <HeaderContainer>
        <h2>Habitos</h2>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <NavContainer>
            <AnimateSharedLayout transition={{ duration: 0.5 }}>
              <Link to={`${url}`} onClick={() => setSelected('ativos')} >
                ATIVOS
                { selected === 'ativos' && <AnimationContainer layoutId="underline"/>}
              </Link>
              <Link to={`${url}/done`} onClick={() => setSelected('feitos')}>
                FEITOS
                { selected === 'feitos' && <AnimationContainer layoutId="underline"/>}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>
          <Switch>
            <Route exact path={`${path}`}>
              <Habits showArchived = {false} />
            </Route>
            <Route path={`${path}/done`}>
              <Habits showArchived = {true} />
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  )
}

export default Dashboard