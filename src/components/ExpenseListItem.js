//Export a stateless functional component
import React from 'react';
import {Link} from 'react-router-dom';

//This is a stateless component but now it pulls data from the store
const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>

    </div>
);

export default ExpenseListItem;