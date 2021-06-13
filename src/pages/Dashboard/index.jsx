import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainDashboard, HeaderContainer, MainContainer, NavContainer, AnimationContainer, MainMenuContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'

const Dashboard = () => {
  const [selected, setSelected] = useState('ativos')
  let { path, url } = useRouteMatch('');

  const handleAnimation = (value) => {
    setSelected(value)
  }

  return(
    <MainDashboard back-color="green">
      <HeaderContainer>
        <h2>Habitos</h2>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <NavContainer>
            <AnimateSharedLayout transition={{ duration: 0.5 }}>
              <Link to={`${url}`} onClick={() => handleAnimation('ativos')} >
                ATIVOS
                { selected === 'ativos' && <AnimationContainer border-color="green" layoutId="underline"/>}
              </Link>
              <Link to={`${url}/feitos`} onClick={() => handleAnimation('feitos')}>
                FEITOS
                { selected === 'feitos' && <AnimationContainer border-color="green" layoutId="underline"/>}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>
          <Switch>
            <Route exact path={`${path}`}>
              <p>AQUI VAI HABITOS ATIVOS</p>
            </Route>
            <Route path={`${path}/feitos`}>
              <p>AQUI VAI HABITOS FEITOS</p>
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  )
}

export default Dashboard