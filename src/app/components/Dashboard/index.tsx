import { useState } from 'react';
import ButtonTabs from '../../atoms/ButtonTabs/index';
import { ADMIN_TABS } from './tabs';
import MunicipalLinks from './MunicipalLinks';
import Supervisors from './Supervisors/index';

const AdminDashboard = () => {
    const [currTab, setCurrTab] = useState(0);
    const tabsArray = ADMIN_TABS;

    const navigateTab = () => {
        switch (currTab) {
            case 0:
                return <Supervisors />;
            case 1:
                return <MunicipalLinks />;

            case 2:
                return <Supervisors />;

            case 3:
                return <MunicipalLinks />;
            case 4:
                return <Supervisors />;
            case 5:
                return <MunicipalLinks />;
            default:
                return <Supervisors />;
        }
    };
    return (
        <>
            <div className="pad-cont-10">
                <ButtonTabs tabsArray={tabsArray} selectedTab={currTab} setSelectedTab={setCurrTab} />
            </div>
            {navigateTab()}
        </>
    );
};

export default AdminDashboard;
