import React from 'react';
//this is to connect to the store
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//This is a stateless component but now it pulls data from the store
const ExpenseList = (props) => (
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-mobile">Expenses</div> 
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    {
        props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
                <span>No Expenses</span>
            </div>
        ) : (
        props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
        })
        )
    }
    </div>
    </div>
);

//this connect() is unique to the react-redux API and pull data from the central store
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
