import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import FormRegister from "../pages/Register";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Groups from "../pages/Groups";
import SpecificGroup from "../pages/SpecificGroup";
import CreatingPage from "../pages/CreationPage";
import EditionPage from "../pages/EditionPage";

const Routes = () => {
  return (
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
      <Route exact path="/edition/:type">
        <EditionPage />
      </Route>
      <Route exact path="/creation/:type">
        <CreatingPage />
      </Route>
      <Route path="/:groupName">
        <SpecificGroup />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
