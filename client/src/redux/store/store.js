import { createStore, applyMiddleware, compose } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';

// <-- Importamos el reduce -->
import reduce from '../reduce/reduce';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reduce,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store;