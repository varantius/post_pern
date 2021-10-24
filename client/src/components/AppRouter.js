import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {allRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {
                allRoutes.map( ({path, component}) =>
                   <Route key={path} path={path} component={component} exact></Route>
                )
            }
            <Redirect to={'/'}></Redirect>
        </Switch>
    );
};

export default AppRouter;