import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard/SupervisorDashboard';
import { paths } from '../constants/paths';

const SupervisorRoutes = () => {
    return (
        <>
            <div className="page-container" id="page-container">
                <Switch>
                    <Route exact path={paths.SUPERVISOR_DASHBOARD.path} component={Dashboard} />
                </Switch>
            </div>
        </>
    );
};

export default SupervisorRoutes;
