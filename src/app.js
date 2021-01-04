//Step 1: you need to install it in the terminal  .. yarn add validator@8.0.0
//Step 2: you need to import it from the actual npmjs.com/package/validator [usually 
//in docs for es6]
//Step 3: Use it!

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import {addExpense } from './actions/expenses';
import {setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

import './firebase/firebase';

const store = configureStore();


///connecting the redux and store for the render. This is helpful because that means all the components can access the store with having
//to continue adding it in each file
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
