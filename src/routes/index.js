import React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../pages/Home'

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </Switch>
        </>
    )
}
