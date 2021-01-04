import React from 'react';

import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PublicRoute from './PublicRoute';

//helps tell the urls you must be authenticated to see it
import PrivateRoute from './PrivateRoute';

//this is to manipulate history to ensure the person stays logged in and manage user history
export const history = createHistory();

const AppRouter = () => (
    <Router history ={history}>
    <div>
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route  component={NotFoundPage}/>

        </Switch>
        </div>
    </Router>
);

export default AppRouter;