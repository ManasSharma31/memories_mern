import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleWare = [thunk];
if (process.env.NODE_ENV === "development") {
    middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));


export default store;