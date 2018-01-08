import { combineReducers } from 'redux';
import budget from './BudgetReducer';

const reducer = combineReducers({
    budget
});

export default reducer;