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

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


///connecting the redux and store for the render. This is helpful because that means all the components can access the store with having
//to continue adding it in each file
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
