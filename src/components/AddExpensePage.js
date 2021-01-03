import React from 'react';

import ExpenseForm from './ExpenseForm';

import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';



const AddExpensePage = (props) => (
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
    onSubmit={(expense) =>{
        console.log(expense);
        props.dispatch(addExpense(expense)); //this add the data into the redux store
        props.history.push('/'); //push is how you programmatically change pages on command. This line is to push to another page
    }}
    />
    </div>
);

export default connect()(AddExpensePage);