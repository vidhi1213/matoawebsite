import React from 'react'
import { Link, Route } from 'react-router-dom'
import { useRouteMatch } from 'react-router';
import AdminLogin from './AdminLogin';

const Admin = () => {
    let match = useRouteMatch();
    console.log(match);
    return (
        <center>
            <h3>Welcome to admin page.</h3>
            <Link to={`${match.url}/adminlogin`}>Please Login</Link>
        </center>

    )
}

export default Admin
