import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
    <div className="box-layout__box">
        <h1 className="box-layout__title">My First App by Daniel</h1>
        <p>This my first test app. Give it a try.    Love you Chloe!!</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);