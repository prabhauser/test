const formValidations = [
    {
        id: 'userName',
        validationType: 'string',
        rules: [
            {
                type: 'required',
                params: ['Please enter Username']
            },
            {
                type: 'max',
                params: [10, 'Username should be max 10 characters']
            },
            {
                type: 'matches',
                params: ['^[0-9a-zA-Z]+$', 'Username should be Alphanumeric']
            }
        ]
    },
    {
        id: 'password',
        validationType: 'string',
        rules: [
            {
                type: 'required',
                params: ['Please enter Password']
            },
            {
                type: 'max',
                params: [50, 'Password length should be max 50 characters']
            }
        ]
    }
];

export { formValidations };
