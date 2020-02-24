import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'

import {createStore, combineReducers} from 'redux'
import gameReducer from './reducers/GameReducer'

console.log('Game reducer with no args returns', gameReducer())

const reducers = combineReducers({
    game: gameReducer
})

let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
