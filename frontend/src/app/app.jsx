// @flow
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

import NavbarTop from './navbar/navbar';
import Routes from './routes/routes';
import SuspenseFallback from './suspense/suspenseFallback';
import { store } from './config/store.config';
import {UserActions} from "./redux/user";

const App = (): React.Node => {

    React.useEffect(()=>{
        store.dispatch(UserActions.init())
    });

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
        <Provider store={store}>
            <BrowserRouter>
                <React.Suspense fallback={<SuspenseFallback />}>
                    <NavbarTop />
                    <Switch>{routes}</Switch>
                </React.Suspense>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
