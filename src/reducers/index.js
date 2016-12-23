import { combineReducers } from 'redux';
import postsReducer from './posts';
import authReducer from './authentication';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    form: form
});

export default rootReducer;
