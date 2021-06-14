import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { 
  MainDashboard, 
  HeaderContainer, 
  MainContainer, 
  NavContainer, 
  AnimationContainer, 
  MainMenuContainer, 
  GroupNameContainer,
  DividerContainer
} from './styles'
import { AnimateSharedLayout } from 'framer-motion'
import { IoIosArrowBack } from 'react-icons/io'

import GroupGoals from '../GroupGoals'

const SpecificGroup = ({ group }) => {
  const [selected, setSelected] = useState('atividades')
  const { id } = useParams()
  let { path, url } = useRouteMatch()

  return(
    <MainDashboard>
      <HeaderContainer>
        <Link to='/groups'><IoIosArrowBack /> Voltar</Link>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <GroupNameContainer>
            {id}
          </GroupNameContainer>
          <DividerContainer />
          <NavContainer>
            <AnimateSharedLayout transition={{ duration: 0.5 }}>
              <Link to={`${url}`} onClick={() => setSelected('atividades')} style={{width: '140px'}}>
                ATIVIDADES 
                { selected === 'atividades' && <AnimationContainer atv layoutId="underline"/>}
              </Link>
              <Link to={`${url}/goals`} onClick={() => setSelected('metas')}>
                METAS
                { selected === 'metas' && <AnimationContainer layoutId="underline"/>}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>
          <Switch>
            <Route exact path={`${path}`}>
              <p>AQUI VAI ATIVIDADES FEITAS</p>
            </Route>
            <Route path={`${path}/goals`}>
              <GroupGoals />
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  )
}

export default SpecificGroup