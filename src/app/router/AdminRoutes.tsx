import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { paths } from '../constants/paths';

const AdminRoutes = () => {
    return (
        <div className="page-container" id="page-container">
            <Switch>
                <Route exact path={paths.ADMIN_DASHBOARD.path} component={Dashboard} />
            </Switch>
        </div>
    );
};

export default AdminRoutes;
