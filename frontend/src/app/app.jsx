// @flow
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavbarTop from './navbar/navbar';
import Routes from './routes/routes';
import SuspenseFallback from './suspense/suspenseFallback';

const App = (): React.Node => {
    const routes = Routes.map((route, index) => {
        return route.component ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
            />
        ) : null;
    });

    return (
        <BrowserRouter>
            <React.Suspense fallback={<SuspenseFallback />}>
                <NavbarTop />
                <Switch>{routes}</Switch>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
