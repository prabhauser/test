import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userLogin, loginReset } from '../../../store/actions/loginActions';
import { connect } from 'react-redux';
import { Container, IconButton, makeStyles } from '@material-ui/core';
import VisibilityIcon from '../../../assets/images/visibility.svg';
import VisibilityOffIcon from '../../../assets/images/visibilityoff.svg';
import PersonIcon from '../../../assets/images/person.svg';
import PasswordLockIcon from '../../../assets/images/password_lock.svg';
import Logo from '../../../assets/images/dswd_logo_login.png';
import Flag from '../../../assets/images/Bitmap.png';
import Label from '../../atoms/Label/index';
import TextInput from '../../atoms/TextInput/index';
import Button from '../../atoms/Button/index';
import SnackbarAlert from '../../atoms/SnackbarAlert';
import roles from '../../constants/roles';
import { getFromLocalStorage, setToLocalStorage } from '../../../utilities/storage/storageUtility';
import YupSchemaGeneration from '../../../adb-common/validations/yup-wrapper';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { formValidations as VALIDATIONS } from '../../../adb-common/validations/rules/login';
import './index.scss';

type StateProps = {
    isLoading: boolean;
    isLoggedIn: boolean;
    loginError: any;
};

type DispatchProps = {
    userLogin: Function;
    loginReset: Function;
};

type LoginProps = StateProps & DispatchProps;

type LoginFormType = {
    userName: string;
    password: string;
};

const useStyles = makeStyles({
    loginInputAlign: {
        marginTop: '9px'
    },
    loginButtonAlign: {
        marginTop: '49px'
    }
});

//Snackbar options
const options = {
    DEFAULT: {
        message: '',
        open: false,
        type: ''
    },
    SUCCESS: {
        message: 'Updated Successfully!',
        open: true
    },
    ERROR: {
        message: 'Something went wrong.',
        type: 'error',
        open: true
    }
};

const Login = (props: LoginProps) => {
    const { isLoggedIn, loginError } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState(options.DEFAULT);
    const [disableLogin, setDisableLogin] = useState(true);
    const history = useHistory();
    const [validationSchema, setValidationSchema] = useState({});
    const [initialValues] = useState({
        userName: '',
        password: ''
    });
    const classes = useStyles();

    useEffect(() => {
        const yupSchema = VALIDATIONS?.reduce(YupSchemaGeneration, {});
        setValidationSchema(Yup.object().shape(yupSchema));
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            const roleCode = 'R01';
            setToLocalStorage('userRole', roleCode);

            const dashboardPage = Object.values(roles)?.find((element) => element?.roleCode === roleCode)?.homepage;

            if (getFromLocalStorage('loginId')) {
                history.push(`/${dashboardPage || 'dashboard'}`);
                window.scrollTo(0, 0);
            }
        }
    }, [isLoggedIn]);

    const handleClick = () => {
        setShowPassword((prev) => !prev);
    };

    // const handleSubmit = async (values: LoginFormType) => {
    //     await props.loginReset();
    //     const reqObj = {
    //         userName: values?.userName,
    //         password: values?.password,
    //         isPasswordEncrypted: false,
    //         isSkipAdAuth: true
    //     };
    //     props.userLogin(reqObj);
    // };

    //remove this code
    const handleSubmit = (values: LoginFormType) => {
        const roleCode = 'R02';
        setToLocalStorage('userRole', roleCode);
        const dashboardPage = Object.values(roles)?.find((element) => element?.roleCode === roleCode)?.homepage;
        history.push(`/${dashboardPage || 'dashboard'}`);
    };

    const handleSnackbarError = (err: any) => {
        const errorMsg = err?.displayMessage || err?.details?.alertMessage;
        const snackbarError = {
            message: errorMsg,
            type: 'error',
            open: true
        };
        setSnackbarOptions(snackbarError);
    };

    useEffect(() => {
        if (loginError) {
            handleSnackbarError(loginError);
        }
    }, [loginError]);

    const closeSnackbar = () => setSnackbarOptions(options.DEFAULT);

    return (
        <Container disableGutters component="main" maxWidth="xl">
            <SnackbarAlert className="login-snackbar" options={snackbarOptions} handleClose={closeSnackbar} />
            <div className="row mar-0">
                <div
                    className="login-left col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pad-0"
                    style={{
                        backgroundImage: `url(${Flag})`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                >
                    <img className="login-logo" src={Logo} />
                </div>
                <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pad-0">
                    <div className="d-flex flex-column ">
                        <div className=" login-container">
                            <div className="login-heading graylabel">Login</div>
                            <div className="login-headingdetail graylabel">Please login with below credentials</div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    handleSubmit(values);
                                }}
                            >
                                {(formikprops: FormikProps<LoginFormType>) => {
                                    const { values, isValid, handleChange, handleBlur, errors, touched } = formikprops;
                                    return (
                                        <Form>
                                            <div>
                                                <Label label={'User ID'} />
                                                <TextInput
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    type="text"
                                                    name="userName"
                                                    value={values.userName}
                                                    autoComplete={'off'}
                                                    formInput={classes.loginInputAlign}
                                                    startAdornment={
                                                        <IconButton className="person-icon">
                                                            <img src={PersonIcon} />
                                                        </IconButton>
                                                    }
                                                    onChange={(e) => {
                                                        setDisableLogin(false);
                                                        handleChange(e);
                                                    }}
                                                    onBlur={handleBlur}
                                                    helperText={
                                                        errors.userName && touched.userName ? errors.userName : ''
                                                        //errors.userName ? errors.userName : ''
                                                    }
                                                />
                                                <Label className={'password-class'} label={'Password'} />
                                                <TextInput
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    formInput={classes.loginInputAlign}
                                                    startAdornment={
                                                        <IconButton className="passwordlock-icon">
                                                            <img src={PasswordLockIcon} />
                                                        </IconButton>
                                                    }
                                                    endAdornment={
                                                        <IconButton className="password-eye" onClick={handleClick}>
                                                            {showPassword ? (
                                                                <img src={VisibilityIcon} />
                                                            ) : (
                                                                <img src={VisibilityOffIcon} />
                                                            )}
                                                        </IconButton>
                                                    }
                                                    value={values.password}
                                                    onChange={(e) => {
                                                        setDisableLogin(false);
                                                        handleChange(e);
                                                    }}
                                                    onBlur={handleBlur}
                                                    helperText={
                                                        errors.password && touched.password ? errors.password : ''
                                                        //errors.password ? errors.password : ''
                                                    }
                                                />
                                                <Button
                                                    formInput={classes.loginButtonAlign}
                                                    fullWidth={true}
                                                    name="Login"
                                                    disabled={disableLogin || !isValid}
                                                    type="submit"
                                                    variant="contained"
                                                />
                                                <div className="d-flex row no-gutters align-items-center login-footer graylabel">
                                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pad-0 footer-copyrights">
                                                        Copyright © 2021 DSWD. All rights reserved.
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 pad-0 align-items-end footer-support">
                                                        support@dswd.com
                                                    </div>
                                                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pad-0 footer-contact">
                                                        (+63)5378697580
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state?.login?.isLoggedIn,
        loginError: state?.login?.err,
        isLoading: state?.Test?.isLoading
    };
};

const mapDispatchToProps = {
    userLogin,
    loginReset
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
