import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import { AUTH_USER } from './actions/types';

import App from './components/App';
import RequireAuthentication from './components/auth/RequireAuthentication';
import Resources from './components/Resources';
import Welcome from './components/Welcome';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';


const token = localStorage.getItem('token');

if (token) {
    store.dispatch({ type: AUTH_USER });
}

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Welcome} />
                <Route path="signin" component={SignIn} />
                <Route path="signout" component={SignOut} />
                <Route path="signup" component={SignUp} />
                <Route path="resources" component={RequireAuthentication(Resources)} />
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);