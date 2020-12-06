import rootReducer from './reducers/index';
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

const logger = createLogger();
const initialState = {};
const middleware = [thunk, logger];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store