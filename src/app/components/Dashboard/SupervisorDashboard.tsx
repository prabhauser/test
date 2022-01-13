import { useState } from 'react';
import ButtonTabs from '../../atoms/ButtonTabs/index';
import { SUPERVISOR_TABS } from './tabs';
import MunicipalLinks from './MunicipalLinks';
import Supervisors from './Supervisors/index';

const SupervisorDashboard = () => {
    const [currTab, setCurrTab] = useState(0);
    const tabsArray = SUPERVISOR_TABS;

    const navigateTab = () => {
        switch (currTab) {
            case 0:
                return <MunicipalLinks />;
            case 1:
                return <Supervisors />;
            case 2:
                return <MunicipalLinks />;
            case 3:
                return <Supervisors />;
            case 4:
                return <MunicipalLinks />;
            default:
                return <MunicipalLinks />;
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

export default SupervisorDashboard;
