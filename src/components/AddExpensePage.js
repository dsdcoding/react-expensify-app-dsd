import React from 'react';

import ExpenseForm from './ExpenseForm';

import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';



const AddExpensePage = (props) => (
    <div>
    <div className="page-header">
    <div className="content-container">
        <h1 className="page-header">Add Expense</h1>
    </div>
    </div>
    <div className="content-container">
    <ExpenseForm 
    onSubmit={(expense) =>{
        console.log(expense);
        props.dispatch(startAddExpense(expense)); //this add the data into the redux store
        props.history.push('/'); //push is how you programmatically change pages on command. This line is to push to another page
    }}
    />
    </div>
    </div>
);

export default connect()(AddExpensePage);