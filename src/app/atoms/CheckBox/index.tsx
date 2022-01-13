import React from 'react';
import { FormControlLabel, Checkbox, CheckboxProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as defaultTheme from '../../../utilities/theme/theme';

type ComponentProps = CheckboxProps & {
    name?: string;
    label?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    value?: boolean;
    disabled?: boolean;
    isChecked?: boolean;
    className?: string;
    containerClassName?: string;
    labelPlacement?: any;
};

const checkboxStyle = {
    root: {
        color: `${defaultTheme.colorCodes.darkGray}`,
        '& .MuiIconButton-colorSecondary:hover': {
            backgroundColor: `${defaultTheme.colorCodes.paleGray}!important`
        },
        '& .MuiTouchRipple-child': {
            backgroundColor: `${defaultTheme.colorCodes.hoverBackground}!important`
        },
        '& .MuiCheckbox-root': {
            color: `${defaultTheme.colorCodes.gray} !important`
        },
        '&$checked': {
            color: `${defaultTheme.colorCodes.red}`
        },
        '&:hover': {
            backgroundColor: 'inherit'
        },
        '& .MuiTypography-body1': {
            fontSize: `${defaultTheme.unit.spacing * 3.5}px`,
            padding: `0 ${defaultTheme.unit.spacing * 4}px`,
            marginTop: '1px'
        },
        '&.MuiFormControlLabel-root': {
            marginLeft: '0',
            padding: `${defaultTheme.unit.spacing * 2.5}px 0`
        }
    },
    bold: {
        color: `${defaultTheme.colorCodes.darkGray}`
    },
    normal: {
        color: `${defaultTheme.colorCodes.red}`
    }
};

export const useStyles = makeStyles(() => ({
    ...checkboxStyle
}));

const CheckBox = (props: ComponentProps) => {
    const classes = useStyles();
    const {
        handleChange,
        name,
        label,
        value,
        disabled,
        isChecked,
        className,
        containerClassName,
        labelPlacement,
        ...rest
    } = props;
    return (
        <div className={containerClassName}>
            <FormControlLabel
                control={
                    <Checkbox
                        name={name}
                        checked={isChecked === undefined || isChecked === null ? false : isChecked}
                        disabled={disabled}
                        onChange={handleChange}
                        value={value === undefined || value === null ? '' : value}
                        {...rest}
                    />
                }
                label={label}
                labelPlacement={labelPlacement}
                classes={{
                    label: isChecked ? classes.bold : classes.normal,
                    root: className
                }}
            />
        </div>
    );
};

export default CheckBox;
