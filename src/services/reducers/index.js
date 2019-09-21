import { combineReducers, createStore } from 'redux';
import themes from './store';
import userinfo from './userInfo';

const Reducers = combineReducers({
    themes,
    userinfo
});

const store = createStore(Reducers);

export default store;