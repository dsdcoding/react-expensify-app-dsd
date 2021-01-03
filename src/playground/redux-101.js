import {createStore } from 'redux';

// ACTION GENERATORS are functions that return action objects (objects are {} and arrays are [])


const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

//setCount

const setCount = ({count}) => ({
    type: 'SET',
    count
});

//resetCount

const resetCount = () => ({
    type: 'RESET'
});


//Section for Reducers

//Key attributes of Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT': 
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
};

//This is considered a "Reducers" in redux
const store = createStore(countReducer);

//store.subscribe is IMPORTANT
//How we can watch for changes to the store. This function gets called every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//unsubscribe is how you tell the subscribe to STOP reading. if this isnt there then it does all 4
//  unsubscribe();

//Telling Redux to do things is through Actions.  An action is an object that gets 
//sent to the Redux "store", which is essentially the bank of items that holds all the stuff
//Actions are the way to communicate through the store. In this example its done "dispatch" to the store

//I'd like to increment the count (it goes by 1 for each time i actioned store.dispatch increment)
//type: IS IMPORTANT, ITS REQUIRED BY REDUX. CANNOT USE ANOTHER NAME

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount());

//Reset the count back to zero
store.dispatch(resetCount());

//I'd like to decrease the count by 1
store.dispatch(decrementCount());

//I'd like to decrease the count by 1
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));