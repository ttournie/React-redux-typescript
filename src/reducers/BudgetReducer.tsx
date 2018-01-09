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

    case getType(actions.updateTransaction):
      const updatedItems = state.transactions.map((item: any) => {
        if (item.id === action.value.id) {
          return { ...item, ...action.value };
        }
        return item;
      });
      return Object.assign({}, state, { transactions: updatedItems });

    case getType(actions.addTransaction):
      const row = {id: state.transactions.length, ...action.value};
      return Object.assign({}, state, { transactions: [...state.transactions, row] });

    case getType(actions.removeTransaction):
      return Object.assign({}, state, { transactions: state.transactions.filter((item: any) => item.id !== action.value)});

    default:
      return state;
  }
};

export default reducer;
