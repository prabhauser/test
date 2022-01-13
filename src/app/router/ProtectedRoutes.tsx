import AdminRoutes from './AdminRoutes';
import SupervisorRoutes from './SupervisorRoutes';
import roles from '../constants/roles';
import { getFromLocalStorage } from '../../utilities/storage/storageUtility';

const ProtectedRoutes = () => {
    const userRole = getFromLocalStorage('userRole');
    return (
        <>
            {userRole === roles?.ADMIN?.roleCode && <AdminRoutes />}
            {userRole === roles?.SUPERVISOR?.roleCode && <SupervisorRoutes />}
        </>
    );
};

export default ProtectedRoutes;
