import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

import thunk from 'redux-thunk';  //need applyMiddleware for this to work

///THIS IS FOR THE REDUX CHROME EXTENSION TO WORK
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //YOU NEED THIS FOR CHROME EXTENSION DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        ///THIS IS FOR THE REDUX CHROME EXTENSION TO WORK
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //YOU NEED THIS FOR CHROME EXTENSION DEV TOOLS
        composeEnhancers(applyMiddleware(thunk))
        
    );
    return store;
};


// Creating a NEW STORE which we will be using the combine reducers to combine reducers
