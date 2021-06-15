import { Link, Switch, Route, useRouteMatch, Redirect, useHistory } from "react-router-dom";

import {
  MainContainer,
  NavContainer,
  AnimationContainer,
  MainMenuContainer,
} from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import { useAuth } from "../../providers/AuthProvider";

import Activity from "../Activity";

const GroupActivities = () => {
  const history = useHistory()
  const { location: { pathname } } = history
  
  const { isAuthenticated } = useAuth();
  let { path, url } = useRouteMatch("");

  if (isAuthenticated === false) {
    console.log("ta autenticado");
    return <Redirect to="/login" />;
  }

  return (
    <MainContainer>
      <MainMenuContainer>
        <NavContainer>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <Link to={`${url}/active`}>
              ATIVOS
              {pathname === `${url}/active` && (
                <AnimationContainer layoutId="underline" />
              )}
            </Link>
            <Link to={`${url}/done`}>
              FEITOS
              {pathname === `${url}/done` && (
                <AnimationContainer layoutId="underline" />
              )}
            </Link>
          </AnimateSharedLayout>
        </NavContainer>

        <Switch>
          <Route exact path={`${path}`} render={() => history.push(`${url}/active`)}/>
          <Route path={`${path}/active`}>
            <Activity showArchived={false} />
          </Route>
          <Route path={`${path}/done`}>
            <p>done</p>
          </Route>
        </Switch>
      </MainMenuContainer>
    </MainContainer>
  );
};

export default GroupActivities;
