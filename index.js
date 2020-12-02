import { registerRootComponent } from 'expo';
import App from './app/App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './app/store/reducers/index';

const store = createStore(reducer);
const AppContainer = () => 
    <Provider store={store}>
        <App/>
    </Provider> 
registerRootComponent(AppContainer); 