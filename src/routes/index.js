import {Route, Switch} from "react-router-dom";

import Login from "../pages/Login"
import NotFound from "../pages/NotFound"

const Routes = () => {
    return(
        <Switch>
            <Route exact path = "/">
                {/* <Home/> */}
                <Login/>
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

export default Routes;