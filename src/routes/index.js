import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import FormRegister from "../pages/Register";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Goals from "../pages/Goals";

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
        <Goals/>
      </Route>
      <Route path="/dashboard">
        {/* <Dashboard/> */}
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
