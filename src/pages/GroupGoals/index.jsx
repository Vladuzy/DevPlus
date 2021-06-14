import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainContainer, NavContainer, AnimationContainer, MainMenuContainer, DividerContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'

import Goals from "../Goals"

const GroupGoals = () => {
  const [selected, setSelected] = useState('ativos')
  let { path, url } = useRouteMatch('');


  return(
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
            <Goals showArchived = {false} />
          </Route>
          <Route path={`${path}/done`}>
            <Goals showArchived = {true} />
          </Route>
        </Switch>
      </MainMenuContainer>
    </MainContainer>
  )
}

export default GroupGoals