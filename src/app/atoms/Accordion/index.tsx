import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, AccordionProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '../CheckBox/index';
import AddIcon from '../../../assets/images/add-icon-red.svg';

type ComponentProps = AccordionProps & {
    expanded: boolean;
    onChange: (event: any, expanded: boolean) => void;
    label?: string;
    accordionId?: number;
    disabled?: boolean;
    showCheckBox?: boolean;
    children?: any;
    showEndIcon?: boolean;
    showEndIconPlus?: boolean;
    customClass?: any;
    customEndIcon?: any;
};

const useStyles = makeStyles({
    root: {
        '& .MuiAccordionSummary-content': {
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        '&.MuiAccordion-root': {
            marginBottom: '10px',
            '&::before': {
                content: 'none'
            }
        },
        '&.MuiPaper-elevation1': {
            boxShadow: 'none'
        },
        '&.MuiAccordion-rounded': {
            borderRadius: '10px !important'
        }
    },
    panelLabel: {
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '110%',
        color: '#7C7C7B',
        textTransform: 'uppercase'
    },
    panelLabelBlack: {
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '110%',
        color: '#000000',
        textTransform: 'uppercase'
    },
    redColorLabel: {
        color: '#951212',
        fontSize: '20px'
    }
});

const Accordion = (props: ComponentProps) => {
    const classes = useStyles();
    const {
        expanded,
        onChange,
        label,
        accordionId,
        disabled,
        showCheckBox,
        showEndIcon,
        showEndIconPlus,
        customClass,
        customEndIcon
    } = props;

    const isShowEndIcon = () => {
        if (showEndIcon) {
            if (customEndIcon) {
                return {
                    expandIcon: <img src={customEndIcon} alt="end icon" />
                };
            } else if (showEndIconPlus) {
                return {
                    expandIcon: <img src={AddIcon} alt="add icon" />
                };
            } else {
                return {
                    expandIcon: <ExpandMoreIcon />
                };
            }
        }
    };

    return (
        <MuiAccordion
            expanded={expanded}
            disabled={disabled}
            onChange={(event, expandedState) => onChange(accordionId, expandedState)}
            className={classes.root}
        >
            <AccordionSummary
                {...isShowEndIcon()}
                //aria-controls={id}
                //id={accordionId}>
            >
                <div
                    className={`${expanded ? classes.panelLabelBlack : classes.panelLabel} ${
                        customClass ? customClass : ''
                    }`}
                    onClick={(event) => {
                        event.preventDefault();
                        onChange(accordionId, !expanded);
                    }}
                >
                    {label}
                </div>
                {showCheckBox && <Checkbox id="accordion-checkbox" isChecked={expanded} />}
            </AccordionSummary>
            <AccordionDetails>{props.children}</AccordionDetails>
        </MuiAccordion>
    );
};

export default Accordion;
