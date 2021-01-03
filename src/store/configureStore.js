import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        ///THIS IS FOR THE REDUX CHROME EXTENSION TO WORK
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //YOU NEED THIS FOR CHROME EXTENSION DEV TOOLS
    );
    return store;
};


// Creating a NEW STORE which we will be using the combine reducers to combine reducers
