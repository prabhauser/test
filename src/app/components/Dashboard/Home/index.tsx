import { useState } from 'react';
import TabGroup from '../../../atoms/TabGroup/index';
import { DASHBOARD_TABS } from '../../../constants/permissions';
import MunicipalLinks from '../MunicipalLinks/index';
import Supervisors from '../Supervisors/index';
import { getFromLocalStorage } from '../../../../utilities/storage/storageUtility';
import { getTabsForUser } from '../helper';

const HomeTab = () => {
    const [currTab, setCurrTab] = useState(0);
    const roleId = getFromLocalStorage('userRole');

    const tabsArray = getTabsForUser(roleId, DASHBOARD_TABS);

    const ComponentMap: any = {
        supervisors: Supervisors,
        municipalLinks: MunicipalLinks
    };

    const handleTabChange = (tabIndex: number) => {
        setCurrTab(tabIndex);
    };

    return (
        <>
            <div className="mar-top-20">
                {tabsArray.length > 0 && (
                    <TabGroup
                        value={currTab}
                        handleChange={handleTabChange}
                        tabHeadingArray={tabsArray}
                        variant={'scrollable'}
                        centered={false}
                        scrollableTab={true}
                        hideBorder={true}
                    >
                        {tabsArray.map((item, index) => {
                            const keyId = index + 1;
                            const ComponentName = ComponentMap[item.component];
                            return (
                                <ComponentName key={keyId} currTab={index} tabTitle={item?.title} id={item?.title} />
                            );
                        })}
                    </TabGroup>
                )}
            </div>
        </>
    );
};

export default HomeTab;
