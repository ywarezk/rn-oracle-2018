import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducer';
import reduxThunk from 'redux-thunk';

export const store = createStore(appReducer, applyMiddleware(reduxThunk));