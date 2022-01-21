export const getTabsForUser = (roleId: any, tabs: any[]) => {
    return tabs.filter((item) => {
        if (item.permission.indexOf(roleId) > -1) {
            return item;
        }
    });
};
