import { combineReducers } from 'redux';
import Test from '../reducers/testReducer/testReducer';
import login from './LoginReducer';

export const RootReducer = combineReducers({
    Test,
    login
});

export type RootState = ReturnType<typeof RootReducer>;
