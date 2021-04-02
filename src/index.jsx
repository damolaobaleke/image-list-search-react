import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//Adding redux as central data store for application, state management
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

let store  = createStore(reducer, applyMiddleware(thunk));

//React uses a 'Provider' to associate store with react app
//pass store as props inside application
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, 
    document.querySelector('#root')
)