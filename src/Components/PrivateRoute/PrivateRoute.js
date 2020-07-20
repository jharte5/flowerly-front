import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {checkToken } from './CheckToken'


function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props =>
                checkToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='login' />
                )
            )
        }
        />
    )
}
export default PrivateRoute;