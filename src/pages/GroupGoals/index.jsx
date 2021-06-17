import { Link, Switch, Route, useRouteMatch, Redirect, useHistory } from "react-router-dom";

import {
  MainContainer,
  NavContainer,
  AnimationContainer,
  MainMenuContainer,
  DividerContainer,
} from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import { useAuth } from "../../providers/AuthProvider";

import Goals from "../Goals";

const GroupGoals = () => {
  const history = useHistory()
  const { location: { pathname } } = history
  const { isAuthenticated } = useAuth();
  let { path, url } = useRouteMatch("");

  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  return (
    <MainContainer>
      <MainMenuContainer>
        <NavContainer>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <Link to={`${url}/active`}>
              ATIVAS
              {pathname === `${url}/active` && (
                <AnimationContainer layoutId="underline" />
              )}
            </Link>
            <Link to={`${url}/done`}>
              FEITAS
              {pathname === `${url}/done` && (
                <AnimationContainer layoutId="underline" />
              )}
            </Link>
          </AnimateSharedLayout>
        </NavContainer>

        <Switch>
          <Route exact path={`${path}`} render={() => history.push(`${url}/active`)}/>
          <Route exact path={`${path}/active`}>
            <Goals showArchived={false} />
          </Route>
          <Route path={`${path}/done`}>
            <Goals showArchived={true} />
          </Route>
        </Switch>
      </MainMenuContainer>
    </MainContainer>
  );
};

export default GroupGoals;
