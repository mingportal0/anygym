import { registerRootComponent } from 'expo';
import App from './app/App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';

const AppContainer = () => 
    <Provider store={store}>
        <App/>
    </Provider> 
registerRootComponent(AppContainer); 