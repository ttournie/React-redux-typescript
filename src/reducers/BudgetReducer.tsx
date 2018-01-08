import { getType } from 'typesafe-actions';
import initialState from '../utils/constants/initialState';
import { RootAction, actions } from '../actions/BudgetActions';

const budgetInitialState = initialState.budget;

/**
 * Codes reducer
 * @param {Object} state Current state
 * @param {Object} action Redux action
 * @returns {Object} Reduced state object
 */
const reducer = (state = budgetInitialState, action: RootAction) => {
  switch (action.type) {

    case getType(actions.updateExpense):
      return Object.assign({}, state, { expense: action.value });

    case getType(actions.addTransaction):
      return Object.assign({}, state, { transactions: [...state.transactions, action.value] });

    default:
      return state;
  }
};

export default reducer;
