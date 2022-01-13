import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { I18nextProvider } from 'react-i18next';

import store from './store';
import App from './app';
import i18n from './localisation';

import './index.scss';

const persistor = persistStore(store as any);

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
