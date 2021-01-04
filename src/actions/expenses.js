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
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0} = expenseData;
            const expense = {description, note, amount, createdAt};      
            database.ref('expenses').push(expense).then((ref) =>{
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

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

