//Export a stateless functional component
import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//This is a stateless component but now it pulls data from the store
const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')} 
         -  
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>

    </div>
);

export default ExpenseListItem;