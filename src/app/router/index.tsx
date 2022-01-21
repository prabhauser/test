import { HashRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoute from './PrivateRoute';
import ProtectedRoutes from './ProtectedRoutes';
import './index.scss';

const Router = () => {
    return (
        <HashRouter basename="/">
            <PublicRoutes />
            <PrivateRoute path="/" component={ProtectedRoutes} />
        </HashRouter>
    );
};

export default Router;
