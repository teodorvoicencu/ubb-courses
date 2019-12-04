// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './redux.config';
import rootSaga from './sagas.config';

const logger = createLogger({
    collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const storeObj = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

export const store = storeObj;
