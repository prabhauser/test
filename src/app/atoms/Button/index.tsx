import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import * as defaultTheme from '../../../utilities/theme/theme';

type funcProps = ButtonProps & {
    name?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: string;
    disabled?: boolean;
    className?: string;
    secondary?: boolean;
    isShowEndIcon?: boolean;
    formInput?: string;
    EndIconArrow?: any;
    fullWidth?: Boolean;
    isShowStartIcon?: boolean;
    StartIconArrow?: any;
    isShowEndCustomIcon?: any;
};

const useStyles = makeStyles({
    root: {
        borderRadius: '25px',
        height: '50px',
        background: 'linear-gradient(270deg, #0F249D 0%, #0F1785 100%)',
        boxShadow: '0 3px 24px 0 rgba(15,28,143,0.4)',
        textTransform: 'none',

        '&.MuiButton-root': {
            textTransform: 'none'
        }
    },
    primaryButton: {
        color: `${defaultTheme.colorCodes.white}`,
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '25px',
        textAlign: 'right',
        '&.MuiButton-root.Mui-disabled': {
            backgroundColor: `${defaultTheme.colorCodes.disabledBlue}`,
            color: `${defaultTheme.colorCodes.white}`
        }
    },
    secondaryButton: {
        border: `1px solid ${defaultTheme.colorCodes.fontColor}`,
        backgroundColor: `${defaultTheme.colorCodes.white}`,
        color: `${defaultTheme.colorCodes.fontColor}`,
        boxShadow: 'none',

        '&.MuiButton-root.Mui-disabled': { opacity: 0.5 }
    }
});

const ADBButton = (props: funcProps) => {
    const classes = useStyles();
    const {
        name,
        handleClick,
        type,
        disabled,
        className,
        secondary,
        fullWidth,
        formInput,
        isShowEndIcon,
        StartIconArrow,
        EndIconArrow,
        isShowStartIcon,
        isShowEndCustomIcon,
        ...rest
    } = props;
    const isDisabled = disabled ? true : false;
    const buttonClass = `${formInput ? formInput : ''} ${classes.root} ${
        secondary ? classes.secondaryButton : classes.primaryButton
    } ${className}`;
    return (
        <div>
            <Button
                type={type}
                name={name}
                className={buttonClass}
                onClick={handleClick}
                disabled={isDisabled}
                fullWidth={fullWidth}
                {...(isShowEndIcon
                    ? {
                          endIcon: isShowEndCustomIcon ? (
                              <img src={isShowEndCustomIcon} />
                          ) : (
                              <EndIconArrow style={{ fontSize: '15px', marginTop: '-2px' }} />
                          )
                      }
                    : {})}
                {...(isShowStartIcon
                    ? {
                          startIcon: isShowEndCustomIcon ? (
                              <img src={isShowEndCustomIcon} />
                          ) : (
                              <StartIconArrow style={{ fontSize: '15px', marginTop: '-2px' }} />
                          )
                      }
                    : {})}
                {...rest}
            >
                {name}
            </Button>
        </div>
    );
};

export default ADBButton;
