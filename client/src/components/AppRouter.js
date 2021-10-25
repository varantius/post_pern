import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {allRoutes, privateRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>

            {user.isAuth && privateRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            {allRoutes.map( ({path, component}) =>
                <Route key={path} path={path} component={component} exact />
            )}

            <Redirect to={'/login'} />
        </Switch>
    );
};

export default AppRouter;