import { Link, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

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
  const { isAuthenticated } = useAuth();
  const [selected, setSelected] = useState("todos");
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
              <Link to={`${url}`} onClick={() => setSelected("todos")}>
                TODOS
                {selected === "todos" && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
              <Link to={`${url}/mine`} onClick={() => setSelected("meus")}>
                MEUS
                {selected === "meus" && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>

          <Switch>
            <Route exact path={`${path}`}>
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
