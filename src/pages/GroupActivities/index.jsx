import { useState } from "react";
import { Link, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

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
  const { isAuthenticated } = useAuth();
  const [selected, setSelected] = useState("ativos");
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
            <Link to={`${url}`} onClick={() => setSelected("ativos")}>
              ATIVOS
              {selected === "ativos" && (
                <AnimationContainer layoutId="underline" />
              )}
            </Link>
            <Link to={`${url}/done`} onClick={() => setSelected("feitos")}>
              FEITOS
              {selected === "feitos" && (
                <AnimationContainer layoutId="underline" />
              )}
            </Link>
          </AnimateSharedLayout>
        </NavContainer>

        <Switch>
          <Route exact path={`${path}`}>
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
