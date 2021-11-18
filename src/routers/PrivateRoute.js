import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {

    // console.log( rest.location.pathname );
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest }
                component = { (props) => {
                    return ( isAuth ) ? <Component { ...props } /> : <Redirect to='/login' /> 
                }
            }
        />
    )
}


PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}