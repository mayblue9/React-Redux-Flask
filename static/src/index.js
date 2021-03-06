require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'style.scss';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHashHistory } from 'history';

injectTapEventPlugin();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="main"/>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
