import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from "react-router-dom";
import InputSearch from "../../components/InputSearch";
import {
  MainDashboard,
  HeaderContainer,
  MainContainer,
  NavContainer,
  AnimationContainer,
  MainMenuContainer,
} from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import GroupList from "../../components/GroupList";

const Groups = () => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const { isAuthenticated } = useAuth();
  let { path, url } = useRouteMatch("");
  const [searchGroups, setSearchGroups] = useState("");

  const searchGroup = (e) => {
    setSearchGroups(e.target.value);
  };

  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

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
          <InputSearch placeholder="Pesquisar" onChange={searchGroup} />
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={() => history.push(`${url}/all`)}
            />
            <Route path={`${path}/all`}>
              <GroupList allGroups={true} search={searchGroups} />
            </Route>
            <Route path={`${path}/mine`}>
              <GroupList allGroups={false} search={searchGroups} />
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  );
};

export default Groups;
