import React, { useEffect, useState } from 'react';
import TextInput from '../../atoms/TextInput/index';
import ADBButton from '../../atoms/Button/index';
import YupSchemaGeneration from '../../../adb-common/validations/yup-wrapper';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { formValidations as validations } from '../../../adb-common/validations/rules/login';
import Checkbox from '../../atoms/CheckBox/index';
import RadioButton from '../../atoms/RadioButton/index';
import AutoComplete from '../../atoms/AutoComplete/index';
import Card from '../../atoms/Card/index';

interface loginFormValues {
    userName: string;
    password: string;
    subscribe: boolean;
}
// const LOCATIONS = [
//     { label: 'Ansonia, CT', value: '1', disabled: false },
//     { label: 'Avon, CT', value: '2', disabled: false },
//     { label: 'Beacon Falls, CT', value: '3', disabled: false }
// ];

const options = [
    {
        value: 1,
        label: 'test1'
    },
    {
        value: 2,
        label: 'test2'
    },
    {
        value: 3,
        label: 'test3'
    }
];

const TestForm = () => {
    const [validationSchema, setValidationSchema] = useState({});
    const [initialValues, setInitialValues] = useState({
        userName: '',
        password: '',
        subscribe: true
    });
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (values: loginFormValues) => {
        console.log(values);
    };
    useEffect(() => {
        const yupSchema = validations.reduce(YupSchemaGeneration, {});
        setValidationSchema(Yup.object().shape(yupSchema));
    }, []);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheckboxChecked(e.currentTarget.checked);
    };

    return (
        <div>
            Test Form Login
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {(props: FormikProps<loginFormValues>) => {
                    const { values, handleChange, errors, touched } = props;
                    return (
                        <Form>
                            <div>
                                <TextInput
                                    value={values.userName}
                                    name="userName"
                                    type="text"
                                    onChange={handleChange}
                                    helperText={errors.userName && touched.userName ? errors.userName : ''}
                                />
                                <div>
                                    <TextInput
                                        value={values.password}
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        helperText={errors.password && touched.password ? errors.password : ''}
                                    />
                                </div>
                                <div>
                                    <Checkbox
                                        name="subscribe"
                                        isChecked={isCheckboxChecked}
                                        value={isCheckboxChecked}
                                        onChange={(e) => {
                                            handleChange(e);
                                            handleCheckboxChange(e);
                                        }}
                                        disabled={false}
                                    />
                                </div>
                                <RadioButton disabled={false} options={['first', 'second']} label={'test'} />
                                {/* <DropDown
                                    value={values.location}
                                    items={LOCATIONS}
                                    name="location"
                                    label="location"
                                    onChange={handleChange}
                                    error={errors.location && touched.location ? errors.location : ''}
                                /> */}
                                <AutoComplete options={options} label={'Test Autocomplete'} />
                                <Card heading={'Test Card'} />
                                <ADBButton name="Login" type="submit" />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
export default TestForm;
