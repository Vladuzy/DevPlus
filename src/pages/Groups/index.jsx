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
import GroupsCard from "../../components/GroupsCard";
import { useAuth } from "../../providers/AuthProvider";

const Groups = () => {
  const { isAuthenticated } = useAuth();
  const [selected, setSelected] = useState("todos");
  let { path, url } = useRouteMatch("");

  if (isAuthenticated === false) {
    console.log("ta autenticado");
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
              <GroupsCard />
            </Route>
            <Route path={`${path}/mine`}>
              <p>TODOS OS MEUS GRUPOS AQUI</p>
            </Route>
          </Switch>
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  );
};

export default Groups;
