import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './root.reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];

const store = createStore(
    RootReducer,
    composeEnhancer(applyMiddleware(...middleware))
);

export default store;