import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducerApp from './reducers/reducer';
import middleware from './middleware/middleware';
import App from './App';

const store = createStore(reducerApp, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);