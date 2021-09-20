// frontend/src/redux/configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import root from './reducers';

const configureStore = initialState => {
  return createStore(
    root,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};

export default configureStore;