import { useMemo } from 'react';
import MOCK_DATA from '../MOCK_DATA.json';
import { COLUMNS } from './SupervisorSchema';
import ADBTable from '../../../atoms/Table/index';

const Supervisors = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    return (
        <div>
            Supervisors
            <ADBTable columns={columns} data={data} />
        </div>
    );
};

export default Supervisors;
