import { combineReducers } from 'redux';

import postReducer from './post';
import userReducer from './user';

const rootReducer = combineReducers({
    posts: postReducer,
    user: userReducer,
})

export default rootReducer;