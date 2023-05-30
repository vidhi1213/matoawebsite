import React from 'react'
import { useCookies } from "react-cookie";
import { Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    const [cookies,] = useCookies(["user"]);
    return (cookies.userid ?
        <Component {...rest} /> :
        <Redirect to="/login" />
    )
}
