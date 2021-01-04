import React from 'react';

import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

import ExpenseForm from './ExpenseForm.js';
import {editExpense, startRemoveExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    //Dispatch the action to edit the expense once the user changed it
                    props.dispatch(editExpense(props.expense.id, expense));
                    //Redirect back to dashboard
                    props.history.push('/');
                }}
                />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
            
        </div>
        
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
export default connect(mapStateToProps)(EditExpensePage);