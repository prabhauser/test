import { useMemo } from 'react';
import MOCK_DATA from '../MOCK_DATA.json';
import { COLUMNS } from '../Supervisors/SupervisorSchema';
import ADBTable from '../../../atoms/Table/index';

const MunicipalLinks = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    return (
        <div>
            Municipal Links
            <ADBTable columns={columns} data={data} />
        </div>
    );
};

export default MunicipalLinks;
