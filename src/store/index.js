import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(reduxThunk)
));

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// let store = createStoreWithMiddleware(rootReducer);
//
window.store = store;

export default store;