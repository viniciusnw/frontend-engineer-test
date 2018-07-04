import { keyPressReducer } from './keyPressReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    symbolState: keyPressReducer
});
