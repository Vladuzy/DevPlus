import { useParams } from "react-router-dom";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import {
  MainDashboard,
  HeaderContainer,
  MainContainer,
  NavContainer,
  AnimationContainer,
  MainMenuContainer,
  GroupNameContainer,
  DividerContainer,
} from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import ButtonExitGroup from "../../components/Buttons/ButtonExitGroup";
import ButtonOpenGroup from "../../components/Buttons/ButtonOpenGroup";
import GroupGoals from "../GroupGoals";

// import Activity from "../Activity"
import GroupActivities from "../GroupActivities";

const SpecificGroup = ({ group }) => {
  // const { id } = group
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const { groupName, subscribe } = useParams();
  let { path, url } = useRouteMatch();
  return (
    <MainDashboard>
      <HeaderContainer>
        <h2 onClick={() => history.push("/groups")}>
          <IoIosArrowBack /> Voltar
        </h2>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <GroupNameContainer>{groupName}</GroupNameContainer>
          <DividerContainer />
          <NavContainer>
            <AnimateSharedLayout transition={{ duration: 0.5 }}>
              <Link to={`${url}/activities`} style={{ width: "140px" }}>
                ATIVIDADES
                {pathname.includes(`${url}/activities`) && (
                  <AnimationContainer atv layoutId="underline" />
                )}
              </Link>
              <Link to={`${url}/goals`}>
                METAS
                {pathname.includes(`${url}/goals`) && (
                  <AnimationContainer layoutId="underline" />
                )}
              </Link>
            </AnimateSharedLayout>
          </NavContainer>
          <Switch>
            <Route
              exact
              path={`${path}`}
              render={() => history.push(`${url}/activities`)}
            />
            <Route path={`${path}/activities`}>
              <GroupActivities />
            </Route>
            <Route path={`${path}/goals`}>
              <GroupGoals />
            </Route>
          </Switch>
          {subscribe === "true" ? <ButtonExitGroup /> : <ButtonOpenGroup />}
        </MainMenuContainer>
      </MainContainer>
    </MainDashboard>
  );
};

export default SpecificGroup;
