import { useParams } from "react-router-dom";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import { useEffect } from "react";

import {
  MainDashboard,
  HeaderContainer,
  MainContainer,
  NavContainer,
  AnimationContainer,
  MainMenuContainer,
  GroupNameContainer,
  DividerContainer,
  EditNameContainer,
} from "./styles";
import { AnimateSharedLayout } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import ButtonExitGroup from "../../components/Buttons/ButtonExitGroup";
import ButtonOpenGroup from "../../components/Buttons/ButtonOpenGroup";
import GroupGoals from "../GroupGoals";
import ButtonEditGroup from "../../components/Buttons/ButtonEditGroup";
import { useAuth } from "../../providers/AuthProvider";
import { useGroups } from "../../providers/Groups";
// import Activity from "../Activity"
import GroupActivities from "../GroupActivities";

const SpecificGroup = () => {
  // const { id } = group
  // subscribe
  const { setIsSubscribe, isSubscribe, id } = useAuth();
  const {groupCreatorId} = useGroups();
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const { groupName, subscribe } = useParams();

  useEffect(() => {
    if (subscribe === "true") {
      setIsSubscribe(true);
    } else {
      setIsSubscribe(false);
    }
  }, []);
  console.log(isSubscribe, groupCreatorId, id);

  let { path, url } = useRouteMatch();
  const handleEditGroup = (value) => {
    history.push(value);
  };
  return (
    <MainDashboard>
      <HeaderContainer>
        <h2 onClick={() => history.push("/groups")}>
          <IoIosArrowBack /> Voltar
        </h2>
      </HeaderContainer>
      <MainContainer>
        <MainMenuContainer>
          <EditNameContainer>
            <GroupNameContainer>{groupName}</GroupNameContainer>
            {
              (isSubscribe && groupCreatorId === id) && (
                <ButtonEditGroup
                  onClick={() => handleEditGroup("/edition/Grupo")}
                />
              )
            }
          </EditNameContainer>
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
