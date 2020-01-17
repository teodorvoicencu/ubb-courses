// @flow
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavbarTop from './navbar/navbar';
import SuspenseFallback from './suspense/suspenseFallback';
import { store } from './config/store.config';
import { UserActions } from './redux/user';
import { RouteTypes, Routes, TeacherRoute, StudentRoute } from './routes';

const App = (): React.Node => {
    React.useEffect(() => {
        store.dispatch(UserActions.init());
    });

    const routes = Routes.map((route, index) => {
        if (route.type === RouteTypes.PRIVATE.TEACHER)
            return <TeacherRoute key={index} {...route} />;

        if (route.type === RouteTypes.PRIVATE.STUDENT)
            return <StudentRoute key={index} {...route} />;

        return <Route key={index} {...route} />;
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
