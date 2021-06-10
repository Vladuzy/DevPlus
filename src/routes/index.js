import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";

import Login from "../pages/Login"
import NotFound from "../pages/NotFound"

const Routes = () => {
    return(
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                {/* <Register/> */}
            </Route>
            <Route path="/dashboard">
                {/* <Dashboard/> */}
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}

<<<<<<< HEAD
export default Routes
=======
export default Routes;
>>>>>>> b6e5997b2ce18b2ba2485fb97dda2445e9d24277
