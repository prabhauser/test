import React from 'react';
import { RouteProps, Redirect, Route } from 'react-router-dom';
import { getFromLocalStorage } from '../../utilities/storage/storageUtility';

interface PrivateRouteProps extends RouteProps {
    component: React.FC<RouteProps>;
    path: string;
}

export default function PrivateRoute({ component: Component, path }: PrivateRouteProps) {
    const accessToken = getFromLocalStorage('userRole');
    return (
        <Route
            path={path}
            render={(props) => (accessToken ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
        />
    );
}
