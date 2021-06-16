import { Link, Switch, Route, useRouteMatch, Redirect, useHistory } from "react-router-dom";

import {
  MainDashboard,
  HeaderContainer,
  MainContainer,
  NavContainer,
  AnimationContainer,
  MainMenuContainer,
} from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import Habits from "../Habits";
import { useAuth } from "../../providers/AuthProvider";
import { useViewport } from '../../providers/GetViewport'

const Dashboard = () => {
  const { viewport: { width } } = useViewport()
  const history = useHistory()
  const { location: { pathname } } = history
  const { isAuthenticated } = useAuth();
  let { path, url } = useRouteMatch("");

  if (isAuthenticated === false) {
    console.log("ta autenticado");
    return <Redirect to="/login" />;
  }

  return (
    <MainDashboard>
      <HeaderContainer>
        <h2>Habitos</h2>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <NavContainer>
            <AnimateSharedLayout transition={{ duration: 0.5 }}>
              <Link to={`${url}/active`}>
                ATIVOS
                {pathname === "/dashboard/active" && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
              <Link to={`${url}/done`}>
                FEITOS
                {pathname === "/dashboard/done" && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>
          <Switch>
            <Route exact path={`${path}`} render={() => width < 769 && history.push(`${url}/active`)}/>
            <Route path={`${path}/active`}>
              <Habits showArchived={false} />
            </Route>
            <Route path={`${path}/done`}>
              <Habits showArchived={true} />
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  );
};

export default Dashboard;
