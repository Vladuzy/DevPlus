import { Route, Switch } from "react-router-dom";
import { useViewport } from '../providers/GetViewport'

import Home from "../pages/Home";
import FormRegister from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import SpecificGroup from "../pages/SpecificGroup";
import CreatingPage from "../pages/CreationPage";
import EditionPage from "../pages/EditionPage";
import DashboardDesktop from "../pages/DESKTOP/Dashboard";
import GroupsDesktop from "../pages/DESKTOP/Groups";

const Routes = () => {
  const { viewport: { width } } = useViewport()

  return ( width < 769 ?
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <FormRegister></FormRegister>
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route exact path="/edition/:type/:habitId">
        <EditionPage />
      </Route>
      <Route exact path="/creation/:type">
        <CreatingPage />
      </Route>
      <Route path="/:groupName/:subscribe">
        <SpecificGroup />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    :
    <Switch>
      <Route path='/Dashboard'>
        <DashboardDesktop />
      </Route>
      <Route path='/Groups'>
        <GroupsDesktop />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
