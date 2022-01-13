import Dialog, { DialogProps } from '@material-ui/core/Dialog';

type ComponentProps = {
    isOpen: boolean;
    handleClose: DialogProps['onClose'];
    children?: any;
};

const Modal = (props: ComponentProps) => {
    const { isOpen, handleClose, ...rest } = props;

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen} {...rest}>
            {props.children}
        </Dialog>
    );
};

export default Modal;
