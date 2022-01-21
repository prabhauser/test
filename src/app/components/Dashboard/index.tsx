import { useState } from 'react';
import { Container } from '@material-ui/core';
import DashboardHeader from '../Header/index';
import TabGroup from '../../atoms/TabGroup';
import { getTabsForUser } from '../Dashboard/helper';
import { getFromLocalStorage } from '../../../utilities/storage/storageUtility';
import { HEADER_TABS } from '../../constants/permissions';
import HomeTab from '../Dashboard/Home';
import Reports from '../Dashboard/Reports';

const Dashboard = () => {
    const [currTab, setCurrTab] = useState(0);
    const handleTabChange = (tabIndex: number) => {
        setCurrTab(tabIndex);
    };

    const ComponentMap: any = {
        home: HomeTab,
        reports: Reports
    };

    const tabs = getTabsForUser(getFromLocalStorage('userRole'), HEADER_TABS);

    const renderHeaderTabs = () => {
        return (
            <div>
                {tabs.length > 0 && (
                    <TabGroup
                        value={currTab}
                        handleChange={handleTabChange}
                        tabHeadingArray={tabs}
                        variant={'standard'}
                        centered={true}
                    >
                        {tabs.map((item, index) => {
                            const keyId = index + 1;
                            const ComponentName = ComponentMap[item.component];
                            return (
                                <ComponentName key={keyId} currTab={index} tabTitle={item?.title} id={item?.title} />
                            );
                        })}
                    </TabGroup>
                )}
            </div>
        );
    };

    return (
        <Container disableGutters component="main" maxWidth="xl">
            <DashboardHeader headerTabs={renderHeaderTabs()} profileList={''} />
        </Container>
    );
};
export default Dashboard;
