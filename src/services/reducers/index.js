import { combineReducers, createStore } from 'redux';
import themes from './store';

const Reducers = combineReducers({
    themes
});

const store = createStore(Reducers);

export default store;