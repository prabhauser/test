import React from 'react';
import { Snackbar, SnackbarProps, IconButtonProps } from '@material-ui/core';
import SnackbarMessage from './SnackbarMessage';

type ComponentProps = {
    options?: any;
    handleClose: SnackbarProps['onClose'] & IconButtonProps['onClick'];
    className?: string;
};

const SnackbarAlert = (props: ComponentProps) => {
    const { options, handleClose, className } = props;
    return (
        <Snackbar
            open={options?.open}
            autoHideDuration={6000}
            className={className}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
        >
            <SnackbarMessage message={options?.message} handleClose={handleClose} />
        </Snackbar>
    );
};

export default SnackbarAlert;
