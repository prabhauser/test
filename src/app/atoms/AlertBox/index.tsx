import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import * as defaultTheme from '../../../utilities/theme/theme';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ADBButton from '../Button';

type ComponentProps = {
    handleClose: React.MouseEventHandler<HTMLElement>;
    isOpen: boolean;
    modalContent?: string;
    buttonName?: string;
    modalTitle?: string;
    modalHeader?: string;
    leftButton?: any;
    rightButton?: any;
    leftBtnPress?: React.MouseEventHandler<HTMLButtonElement>;
    rightBtnPress?: React.MouseEventHandler<HTMLButtonElement>;
    modalContent2?: string;
};

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: `${defaultTheme.unit.spacing * 2}px`,
        '& .MuiDialog-paperWidthSm': {
            background: '#F1F3F6'
        }
    },
    closeButton: {
        position: 'absolute',
        right: `${defaultTheme.unit.spacing}px`,
        top: `${defaultTheme.unit.spacing}px`,
        color: `${defaultTheme.colorCodes.gray}`
    },
    modalHeader: {
        fontSize: '22px'
    }
});

type DialogTitleType = {
    id: string;
    children?: any;
    classes?: any;
    onClose?: React.MouseEventHandler<HTMLElement>;
};

const DialogTitle = (props: DialogTitleType) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes?.root} {...other}>
            <Typography>{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes?.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

const AlertBox = (props: ComponentProps) => {
    const classesList = useStyles();
    const {
        handleClose,
        isOpen,
        modalContent,
        modalContent2,
        modalTitle,
        modalHeader,
        leftButton,
        rightButton,
        leftBtnPress,
        rightBtnPress
    } = props;
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {modalTitle}
                </DialogTitle>
                <DialogContent dividers>
                    {modalHeader && (
                        <Typography gutterBottom>
                            <div className={classesList.modalHeader}>{modalHeader}</div>
                        </Typography>
                    )}
                    <Typography gutterBottom>{modalContent}</Typography>
                    {modalContent2 && <Typography gutterBottom>{modalContent2}</Typography>}
                </DialogContent>
                <DialogActions>
                    {leftButton && (
                        <ADBButton
                            name={leftButton?.btnName}
                            handleClick={leftBtnPress}
                            secondary={true}
                            isShowEndIcon={leftButton?.icon ? true : false}
                            isShowEndCustomIcon={leftButton?.icon}
                            color="primary"
                            type="submit"
                        />
                    )}
                    {rightButton && (
                        <ADBButton
                            name={rightButton?.btnName}
                            handleClick={rightBtnPress}
                            isShowEndIcon={rightButton?.icon ? true : false}
                            EndIconArrow={rightButton?.icon}
                            color="primary"
                            type="submit"
                        />
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AlertBox;
