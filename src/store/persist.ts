import { RootReducer } from './reducers/index';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'rootState',
    storage,
    whitelist: [],
    blacklist: []
};

const persistRootReducer = persistReducer(persistConfig, RootReducer);

export default persistRootReducer;
