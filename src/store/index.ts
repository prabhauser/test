import { createStore } from 'redux';

import RootReducer from './persist';
import enhancer from './middleware';

const store = createStore(RootReducer, enhancer);

export default store;
