import {Route, Switch} from "react-router-dom";

import Login from "../pages/Login"

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
            <Route path="/dashboard">
                {/* <Dashboard/> */}
            </Route>
            <Route>
                {/* <PageNotFound/> */}
            </Route>
        </Switch>
    )
}