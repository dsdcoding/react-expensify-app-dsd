//Step 1: you need to install it in the terminal  .. yarn add validator@8.0.0
//Step 2: you need to import it from the actual npmjs.com/package/validator [usually 
//in docs for es6]
//Step 3: Use it!

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';

import configureStore from './store/configureStore';
import {startSetExpenses } from './actions/expenses';

import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';

import {login, logout } from './actions/auth';

const store = configureStore();


///connecting the redux and store for the render. This is helpful because that means all the components can access the store with having
//to continue adding it in each file
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
    ReactDOM.render(jsx,document.getElementById('app'));
    hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

