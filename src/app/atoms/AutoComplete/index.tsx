import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormHelperText } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import * as defaultTheme from '../../../utilities/theme/theme';

type ComponentProps = {
    options: any;
    label?: string;
    endAdornment?: any;
    startAdornment?: any;
    forcePopupIcon?: boolean;
    disabled?: boolean;
    variant?: string;
    onChange?: (event: any, value: any) => void;
    value?: any;
    defaultValue?: any;
    onInputChange?: (event: any, value: any) => void;
    helperText?: string;
    isError?: boolean;
    isIcon?: boolean;
};

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiFormHelperText-root': {
            color: defaultTheme.colorCodes.error
        },
        '& .MuiInputAdornment-root': {
            paddingBottom: '18px'
        },
        '& .MuiFilledInput-underline .': {
            borderBottomStyle: 'none'
        },
        '& .MuiFilledInput-root ': {
            background: `${defaultTheme.colorCodes.lightGray}`
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before ': {
            borderBottom: `1px solid  ${defaultTheme.colorCodes.gray}`
        },
        '& .Mui-disabled:after': {
            borderBottom: `1px solid  ${defaultTheme.colorCodes.gray}`
        },
        '& .Mui-disabled:before': {
            borderBottom: `1px solid  ${defaultTheme.colorCodes.gray}`
        },
        '& .MuiInput-underline:before ': {
            borderBottom: `1px solid ${defaultTheme.colorCodes.gray}`
        },
        '& .MuiInput-underline:after': {
            borderBottom: `1px solid ${defaultTheme.colorCodes.primary}`,
            '&:hover': {
                borderBottom: `1px solid ${defaultTheme.colorCodes.primary}`
            }
        }
    },
    iconStart: {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '10px',
        zIndex: 9
    },
    inputLabelWithIcon: {
        '& .MuiInputLabel-root': {
            marginLeft: '30px'
        },
        '& .MuiInputBase-input': {
            marginLeft: '30px'
        }
    },
    inputLabelWithoutIcon: {
        '& .MuiInputLabel-root': {
            marginLeft: '0px'
        },
        '& .MuiInputBase-input': {
            marginLeft: '0px'
        }
    }
}));

const AutoComplete = (props: ComponentProps) => {
    const classes = useStyles();

    const {
        options,
        label,
        startAdornment,
        endAdornment,
        onInputChange,
        forcePopupIcon,
        disabled,
        variant,
        onChange,
        value,
        isError,
        helperText,
        defaultValue,
        isIcon,
        ...rest
    } = props;
    const startAdor = startAdornment && <InputAdornment position="start"> {startAdornment} </InputAdornment>;
    const endAdor = endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>;

    return (
        <div className={`${classes.root}${isIcon ? classes.inputLabelWithIcon : classes.inputLabelWithoutIcon}`}>
            {isIcon && <div className={classes.iconStart}>{startAdor}</div>}
            <FormControl error={isError}>
                <Autocomplete
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                    fullWidth={true}
                    options={options}
                    //defaultValue={defaultValue || ''}
                    onInputChange={onInputChange}
                    forcePopupIcon={forcePopupIcon}
                    getOptionLabel={(option: any) => option.label || ''}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            type="text"
                            className={`${isIcon ? classes.inputLabelWithIcon : classes.inputLabelWithoutIcon}`}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: isIcon ? '' : startAdor,
                                endAdornment: endAdor
                            }}
                            variant={variant}
                            label={label}
                        />
                    )}
                    {...rest}
                />
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </div>
    );
};

export default AutoComplete;
