import Login from '../components/Login/index';
import { paths } from '../constants/paths';
import { Route, Switch, withRouter } from 'react-router-dom';

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path={paths.LOGIN.path} component={Login} />
        </Switch>
    );
};

export default withRouter(PublicRoutes);
