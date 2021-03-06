import uuid from 'uuid';
import database from '../firebase/firebase';

//steps for adding/changing expenses
//Step 1 Component calls action generator
//Step 2 Component dispatches object
//Step 3 Redux runs reducers and changes the store 

//To add/change data to firebase
//Step 1: component calls action generator
//Step2: action generator returns a function
//Step 3: the component dispatches a function () (this is using the redux-thunk)
//Step 4: function runs (has the ability to dispatch other actions and do whatever it wants)

//ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0} = expenseData;
            const expense = {description, note, amount, createdAt};      
            database.ref(`users/${uid}/expenses`).push(expense).then((ref) =>{
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

//REMOVE_EXPENSE

export const removeExpense = ({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//asynchonize action below to get it going with firebase
export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${id}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));
        });
    };
};
//Expense removal wiring to firebase:
// Step 1: create startRemoveExpense (same call signature as removeExpense)
// Step 2: Test startRemoveExpense with "should remove expenses with firebase"
//Step 3: use startRemoveExpense with in EditExpensePage instead of removeExpense


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//asynchonize action below to get it going with firebase..the RETURN is important or it doesnt work
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${uid}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

//Expense editing wiring to firebase:
// Step 1: create startEditExpense (same call signature as removeExpense)
// Step 2: Test startEditExpense with "should edit expenses with firebase"
//Step 3: use startEditExpense with in EditExpensePage instead of editExpense

//SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});



//asynchonize action below to get it going with firebase
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses((expenses)));
        });
    };
};

//Steps wiring set expenses to firebase
// 1. Fetch all expense data once 
//2. Parse the data into an array 
//3. Dispatch SET_EXPENSES for the data actually changes
