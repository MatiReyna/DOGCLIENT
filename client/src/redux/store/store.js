import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// <-- Importamos el reduce -->
import reduce from '../reduce/reduce';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reduce,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;