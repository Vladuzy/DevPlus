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

import { useAuth } from "../../providers/AuthProvider";

import GroupList from "../../components/GroupList";

const Groups = () => {
  const history = useHistory()
  const { location: { pathname } } = history
  const { isAuthenticated } = useAuth();
  let { path, url } = useRouteMatch("");

  // if (isAuthenticated === false) {
  //   console.log("ta autenticado");
  //   return <Redirect to="/login" />;
  // }

  return (
    <MainDashboard>
      <HeaderContainer>
        <h2>Grupos</h2>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <NavContainer>
            <AnimateSharedLayout transition={{ duration: 0.5 }}>
              <Link to={`${url}/all`}>
                TODOS
                {pathname === "/groups/all" && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
              <Link to={`${url}/mine`}>
                MEUS
                {pathname === "/groups/mine" && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>

          <Switch>
            <Route exact path={`${path}`} render={() => history.push(`${url}/all`)}/>
            <Route path={`${path}/all`}>
              <GroupList allGroups={true} />
            </Route>
            <Route path={`${path}/mine`}>
              <GroupList />
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  );
};

export default Groups;
