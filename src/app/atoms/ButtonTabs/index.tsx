import './index.scss';

type ComponentProps = {
    tabsArray: {
        heading: string;
        icon?: any;
        selectedIcon?: any;
    }[];
    selectedTab: Number;
    setSelectedTab: Function;
};

const ButtonTabs = (props: ComponentProps) => {
    const { tabsArray, selectedTab, setSelectedTab } = props;

    return (
        <div className="btnTabs-container">
            {tabsArray?.map(({ selectedIcon, icon, heading }, index) => {
                const arrKey = index + 1;
                return (
                    <div
                        className={selectedTab === index ? 'btnTabs-tab btnTabs-tab-selected' : 'btnTabs-tab'}
                        key={arrKey}
                        onClick={() => {
                            setSelectedTab(index);
                        }}
                    >
                        <img
                            src={selectedTab === index ? selectedIcon : icon}
                            className={selectedTab === index ? 'btnTabs-tab-icon-selected' : 'btnTabs-tab-icon'}
                        />
                        <div>{heading}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ButtonTabs;
