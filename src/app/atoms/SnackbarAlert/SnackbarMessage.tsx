import React from 'react';
import { Grid, IconButton, IconButtonProps, makeStyles } from '@material-ui/core';
import * as defaultTheme from '../../../utilities/theme/theme';
import closeIcon from '../../../assets/images/icon_close_white.svg';

type ComponentProps = {
    message: string;
    handleClose: IconButtonProps['onClick'];
};

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: defaultTheme.colorCodes.lightGray,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '8px 8px 16px rgba(208, 208, 208, 0.5), -8px -8px 16px #FFFFFF',
        borderRadius: '10px',
        padding: '14px'
    },
    message: {
        marginLeft: 10,
        marginRight: 20,
        fontSize: '1em',
        color: defaultTheme.colorCodes.fontColor
    }
}));

const SnackbarMessage = (props: ComponentProps) => {
    const classes = useStyles();
    return (
        <Grid className={classes.container}>
            <Grid className={classes.message}>{props.message}</Grid>
            <Grid>
                <IconButton onClick={props.handleClose}>
                    <img src={closeIcon} />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default SnackbarMessage;
