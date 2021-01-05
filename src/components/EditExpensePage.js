import React from 'react';

import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

import ExpenseForm from './ExpenseForm.js';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
        <div className="page-header">
            <div className="content-container"></div>
            <h1 className="page-header__title"> Edit Expense</h1>
        </div>
        <div className="content-container">
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    //Dispatch the action to edit the expense once the user changed it
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    //Redirect back to dashboard
                    props.history.push('/');
                }}
                />
            <button className="button button--secondary" onClick={() => {
                props.dispatch(startRemoveExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove Expense</button>
            </div>
        </div>
        
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
export default connect(mapStateToProps)(EditExpensePage);