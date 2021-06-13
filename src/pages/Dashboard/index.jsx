import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { MainDashboard, HeaderContainer, MainContainer, NavContainer, AnimationContainer, MainMenuContainer } from './styles'
import { AnimateSharedLayout } from 'framer-motion'

import Goals from "../Goals"

const Dashboard = () => {
  const [selected, setSelected] = useState('ativos')
  let { path, url } = useRouteMatch('');

  const handleAnimation = (value) => {
    setSelected(value)
  }

  return(
    // <MainDashboard back-color="green">
    //   <HeaderContainer>
    //     <h2>Habitos</h2>
    //   </HeaderContainer>
    //   <MainContainer>
    //     <MainMenuContainer>
    //       <NavContainer>
    //         <AnimateSharedLayout transition={{ duration: 0.5 }}>
    //           <Link to={`${url}`} onClick={() => handleAnimation('ativos')} >
    //             ATIVOS
    //             { selected === 'ativos' && <AnimationContainer border-color="green" layoutId="underline"/>}
    //           </Link>
    //           <Link to={`${url}/feitos`} onClick={() => handleAnimation('feitos')}>
    //             FEITOS
    //             { selected === 'feitos' && <AnimationContainer border-color="green" layoutId="underline"/>}
    //           </Link>
    //         </AnimateSharedLayout>
    //       </NavContainer>
    //       <Switch>
    //         <Route exact path={`${path}`}>
    //           <p>AQUI VAI HABITOS ATIVOS</p>
    //         </Route>
    //         <Route path={`${path}/feitos`}>
    //           <p>AQUI VAI HABITOS FEITOS</p>
    //         </Route>
    //       </Switch>
    //     </MainMenuContainer>
    //   </MainContainer>
    // </MainDashboard>

  <MainDashboard back-color="yellow">
    <HeaderContainer>
    <h2>Grupos</h2>
    </HeaderContainer>
    <MainContainer>
      <MainMenuContainer>
        <NavContainer>

        <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <Link to={`${url}/groupX/metas/ativas`} onClick={() => handleAnimation('ativos')} >
              ATIVOS
              { selected === 'ativos' && <AnimationContainer border-color="yellow" layoutId="underline"/>}
            </Link>
            <Link to={`${url}/groupX/metas/feitas`} onClick={() => handleAnimation('feitos')}>
              FEITOS
              { selected === 'feitos' && <AnimationContainer border-color="yellow" layoutId="underline"/>}
            </Link>
          </AnimateSharedLayout>
        </NavContainer>

        <Switch>
          <Route path={`${path}/groupX/metas/ativas`}>
            <Goals showArchived = {false} />
          </Route>
          <Route path={`${path}/groupX/metas/feitas`}>
            <Goals showArchived = {true} />
          </Route>
        </Switch>
      </MainMenuContainer>
    </MainContainer>
  </MainDashboard>


  )
}

export default Dashboard