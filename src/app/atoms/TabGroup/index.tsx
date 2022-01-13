import { Tabs, Tab, Box, Paper, TabsProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as defaultTheme from '../../../utilities/theme/theme';
import { red } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';

type ComponentProps = {
    children?: any;
    value: number;
    className?: string;
    handleChange: Function;
    tabHeadingArray: any[];
    variant?: TabsProps['variant'];
    centered?: boolean;
    scrollableTab?: boolean;
    hideBorder?: boolean;
};

const useStyles = makeStyles({
    paper: {
        background: 'none !important',
        boxShadow: 'none !important'
    },
    label: {
        textTransform: 'none',
        fontSize: `${defaultTheme.unit.spacing * 4}px`,
        letterSpacing: ' -0.17px',
        lineHeight: '17px',
        color: `${defaultTheme.colorCodes.darkGray}`,
        bottom: '-3px',
        borderBottom: `5px solid  ${defaultTheme.colorCodes.gray}`,
        '&.Mui-selected': {
            color: `${defaultTheme.colorCodes.red}`
        }
    },
    boxLabel: {
        width: '93px',
        height: '100px',
        overflowWrap: 'break-word',
        wordWwrap: 'break-word',
        background: `${defaultTheme.colorCodes.white}`,
        '&.MuiTab-root': {
            minWidth: '93px'
        },
        marginRight: '10px'
    },
    box: {
        padding: '0 0 0 0'
    },
    root: {
        flexGrow: 1,
        '&.MuiCard-root': {
            boxShadow: 'none'
        },
        '&.Mui-selected': {
            color: red
        },
        '&.MuiTab-textColorInherit.Mui-selected': {
            color: red
        },
        '&.MuiTabScrollButton-root': {
            background: '#FFFFFF'
        }
    },
    '&.Mui-selected': {
        backgroundColor: 'turquoise',
        color: 'red',
        fontWeight: 600
    }
});

type TabPanelType = {
    children: any;
    index: number;
    value: any;
};

function TabPanel(props: TabPanelType) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;
    return (
        <>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-force-tabpanel-${index}`}
                aria-labelledby={`scrollable-force-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box className={classes.box} p={2}>
                        {children}
                    </Box>
                )}
            </div>
        </>
    );
}

function a11yProps(index: number) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`
    };
}

const TabGroup = (props: ComponentProps) => {
    const classes = useStyles();
    const { handleChange, value, tabHeadingArray, children, variant, centered, scrollableTab, hideBorder } = props;

    const handleTabChange = (e: any, newValue: number) => {
        handleChange(newValue);
    };

    const scrollableOptions = (index: number, icon: any) => {
        if (scrollableTab) {
            return {
                icon: icon ? icon : <PhoneIcon />,
                ...a11yProps(index)
            };
        } else {
            return {};
        }
    };

    return (
        <>
            <Paper className={classes.paper}>
                <Tabs
                    TabIndicatorProps={
                        hideBorder
                            ? {
                                  style: {
                                      backgroundColor: '#f1f3f6'
                                  }
                              }
                            : {
                                  style: {
                                      backgroundColor: '#c7222a'
                                  }
                              }
                    }
                    value={value}
                    onChange={handleTabChange}
                    aria-label="tab-group"
                    centered={centered || false}
                    variant={variant}
                    scrollButtons="on"
                    textColor="primary"
                >
                    {tabHeadingArray?.map((tab: any, index) => {
                        const arrKey = index + 1;
                        return (
                            <Tab
                                className={scrollableTab ? classes.boxLabel : classes.label}
                                label={tab?.title}
                                key={arrKey}
                                disabled={tab?.disabled}
                                {...scrollableOptions(index, tab?.icon)}
                            />
                        );
                    })}
                </Tabs>

                {children &&
                    children.map((element: any, index: number) => {
                        return (
                            <TabPanel value={value} index={index} key={element.key || index}>
                                {element}
                            </TabPanel>
                        );
                    })}
            </Paper>
        </>
    );
};

export default TabGroup;
