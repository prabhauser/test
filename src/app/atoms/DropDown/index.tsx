import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, SelectProps } from '@material-ui/core';
import * as defaultTheme from '../../../utilities/theme/theme';

type ItemsType = {
    label: string;
    type?: string;
    value: string;
    disabled?: boolean;
};

interface DropDownProps {
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    value?: any;
    items?: ItemsType[];
    name: string;
    label: string;
    disabled?: boolean;
    style?: any;
    className?: string;
    endAdornment?: any;
    startAdornment?: any;
    type?: string;
    required?: boolean;
    isDropDown?: boolean;
    isLengthyLabel?: boolean;
    isError?: boolean;
    helperText?: string;
    variant?: SelectProps['variant'];
    control?: Function;
    isIcon?: boolean;
}

const useStyles = makeStyles(() => ({
    formControl: {
        margin: 0,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap',
        '& .MuiInputBase-input': {
            color: `${defaultTheme.colorCodes.darkGray}`,
            fontSize: `${defaultTheme.unit.spacing * 4}px`,
            paddingBottom: '10px'
        },
        '& .MuiInputLabel-formControl': {
            transform: 'translate(12px, 20px) scale(1)'
        },
        '& .MuiInputBase-root': {
            cursor: 'pointer'
        },
        '& .MuiFilledInput-root ': {
            background: `${defaultTheme.colorCodes.lightGray}`
        },
        '& .MuiInput-underline:before ': {
            borderBottom: `1px solid ${defaultTheme.colorCodes.gray}`
        },
        '& .MuiInput-underline:after': {
            borderBottom: `1px solid ${defaultTheme.colorCodes.primary}`
        },
        '& .MuiFormLabel-root.Mui-focused ': {
            color: `${defaultTheme.colorCodes.darkenGray}`
        },
        '& .MuiInputLabel-shrink': {
            fontSize: `${defaultTheme.unit.spacing * 4}px !important`,
            color: `${defaultTheme.colorCodes.darkenGray}`,
            transform: 'translate(12px, 10px) scale(0.75) !important'
        },

        '& .MuiSelect-select:focus': {
            backgroundColor: 'transparent'
        },
        '& .MuiFormHelperText-root': {
            color: `${defaultTheme.colorCodes.error}`,
            fontSize: '12px',
            lineHeight: '14px',
            marginTop: '10px'
        }
    },
    imgArrowIcon: {
        height: '16px',
        width: '16px'
    },
    paper: {
        width: '100%'
    },
    dropdownStyle: {
        border: `solid ${defaultTheme.unit.spacing * 0.25}px ${defaultTheme.colorCodes.grayBorder} `,
        fontSize: `${defaultTheme.unit.spacing * 3}px`
    },
    inputFieldLengthy: {
        '& .MuiInputLabel-formControl': {
            display: 'inline-block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        '& .MuiInputLabel-shrink': {
            color: `${defaultTheme.colorCodes.darkenGray}`,
            fontSize: `${defaultTheme.unit.spacing * 4}px !important`,
            overflow: 'auto',
            width: '100vw'
        }
    },
    disabledComponent: {
        opacity: 0.6
    },
    inputStyleIcon: {
        '& .MuiSelect-selectMenu': {
            fontSize: `${defaultTheme.unit.spacing * 4}px`,
            letterSpacing: '-0.16px',
            color: `${defaultTheme.colorCodes.black}`,
            marginLeft: '30px'
        }
    },
    inputStyleWithouIcon: {
        '& .MuiSelect-selectMenu': {
            fontSize: `${defaultTheme.unit.spacing * 4}px`,
            letterSpacing: '-0.16px',
            color: `${defaultTheme.colorCodes.black}`
        }
    },
    labelStyle: {
        fontSize: '1rem',
        lineHeight: '17px',
        letterSpacing: '-0.16px',
        color: `${defaultTheme.colorCodes.darkGray}`
    },
    labelStyleIcon: {
        fontSize: '1rem',
        lineHeight: '17px',
        letterSpacing: '-0.16px',
        color: `${defaultTheme.colorCodes.darkGray}`,
        marginLeft: '30px'
    },
    optionStyle: {
        fontSize: `${defaultTheme.unit.spacing * 4}px`,
        color: `${defaultTheme.colorCodes.darkGray}`
    },
    errorStyle: {
        '& .MuiFormLabel-root.Mui-error': {
            color: defaultTheme.colorCodes.darkGray
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before ': {
            borderBottom: `1px solid  ${defaultTheme.colorCodes.error}`
        },
        '& .MuiInput-underline:after': {
            borderBottom: `1px solid ${defaultTheme.colorCodes.error}`,
            '&:hover': {
                borderBottom: `1px solid ${defaultTheme.colorCodes.error}`
            }
        }
    },
    iconStart: {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '10px',
        zIndex: 9
    }
}));

export default function DropDown(props: DropDownProps) {
    const classes = useStyles();
    const {
        value,
        items,
        name,
        disabled,
        isDropDown,
        isLengthyLabel,
        variant,
        required,
        isError,
        isIcon,
        startAdornment,
        onChange,
        label,
        ...rest
    } = props;

    const startAdor = !!startAdornment && (
        <InputAdornment position="start">
            {' '}
            <img src={startAdornment} />{' '}
        </InputAdornment>
    );

    return (
        <div
            id="parent"
            className={`${classes.paper} ${disabled ? classes.disabledComponent : ''}`}
            style={props.style}
        >
            <FormControl
                fullWidth
                className={`${classes.formControl} ${isDropDown ? isDropDown : ''} ${
                    isLengthyLabel ? classes.inputFieldLengthy : ''
                }${isIcon ? classes.inputStyleIcon : classes.inputStyleWithouIcon}`}
                required={required}
                error={isError}
                variant={variant}
            >
                {isIcon && <div className={classes.iconStart}>{startAdor}</div>}
                <InputLabel
                    classes={{
                        root: `${startAdornment ? classes.labelStyleIcon : classes.labelStyle}`
                    }}
                    id="select-label"
                >
                    {label}
                </InputLabel>
                <Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    classes={{
                        disabled: disabled ? classes.disabledComponent : ''
                    }}
                    startAdornment={isIcon ? '' : startAdor}
                    MenuProps={{
                        classes: { paper: classes.dropdownStyle },
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }
                    }}
                    control={props.control}
                    {...rest}
                >
                    {items?.map((item: ItemsType, i: number) => {
                        return (
                            <MenuItem key={item.value} value={item.value} className={classes.optionStyle}>
                                {props.type == 'with' ? (
                                    item?.type
                                ) : (
                                    <span className={props.className}>{item?.label}</span>
                                )}
                            </MenuItem>
                        );
                    })}
                </Select>
                {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
            </FormControl>
        </div>
    );
}
