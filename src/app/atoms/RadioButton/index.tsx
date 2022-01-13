import { Radio, FormHelperText, RadioGroupProps } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import * as defaultTheme from '../../../utilities/theme/theme';

type ComponentProps = RadioGroupProps & {
    options: any;
    label?: string;
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    disabled?: boolean;
    inputRef?: FormControlLabelProps['inputRef'];
    helperText?: string;
};

const useStyles = makeStyles(() => ({
    root: {
        '& .Mui-checked': {
            color: `${defaultTheme.colorCodes.supportRed}`
        },
        '& .MuiFormHelperText-root': {
            color: `${defaultTheme.colorCodes.error}`,
            fontSize: '12px',
            lineHeight: '14px',
            marginTop: '10px'
        }
    }
}));

const RadioButton = (props: ComponentProps) => {
    const { options, label, labelPlacement, disabled, inputRef, helperText, ...rest } = props;
    const classes = useStyles();
    return (
        <FormControl component="fieldset" className={`${classes.root}`}>
            {label && <FormLabel>{label}</FormLabel>}
            <RadioGroup {...rest}>
                {options?.map((option: any, index: number) => {
                    const radioKey = index + 1;
                    return (
                        <FormControlLabel
                            key={radioKey}
                            value={option?.value}
                            control={<Radio />}
                            label={option?.label}
                            labelPlacement={labelPlacement || 'end'}
                            disabled={option?.disabled || disabled}
                            inputRef={inputRef}
                        />
                    );
                })}
            </RadioGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

export default RadioButton;
