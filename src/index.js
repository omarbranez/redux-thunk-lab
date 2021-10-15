// step 1: set up environment
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux' // import thunk
import catsReducer from './reducers/catsReducer'

import thunk from 'redux-thunk' // import thunk

// const store = createStore(catsReducer) // create store where state is kept
const store = createStore(catsReducer, applyMiddleware(thunk)) // pass thunk into applymiddleware

ReactDOM.render(
    <Provider store={store}> 
    {/* wrap app in provider */}
        <App />
    </Provider>,
    document.getElementById('root')
);
