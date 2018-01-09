import { getReturnOfExpression } from 'react-redux-typescript';
import { createAction } from 'typesafe-actions';
import { Transaction } from '../utils/models/initialState';

const BUDGET_EXPENSE_UPDATE = 'BUDGET_EXPENSE_UPDATE';
const BUDGET_ADD_TRANSACTION = 'BUDGET_ADD_TRANSACTION';
const BUDGET_REMOVE_TRANSACTION = 'BUDGET_REMOVE_TRANSACTION';
const BUDGET_UPDATE_TRANSACTION = 'BUDGET_UPDATE_TRANSACTION';

export const actions = {
  updateExpense: createAction(BUDGET_EXPENSE_UPDATE, (expense: number) => ({
    type: BUDGET_EXPENSE_UPDATE,
    value: expense,
  })),
  addTransaction: createAction(BUDGET_ADD_TRANSACTION, () => ({
    type: BUDGET_ADD_TRANSACTION,
    value: {
      description: '',
      amount: 0,
    },
  })),
  removeTransaction: createAction(BUDGET_REMOVE_TRANSACTION, (id: number) => ({
    type: BUDGET_REMOVE_TRANSACTION,
    value: id,
  })),
  updateTransaction: createAction(BUDGET_UPDATE_TRANSACTION, (transaction: Transaction) => ({
    type: BUDGET_UPDATE_TRANSACTION,
    value: transaction,
  })),
};

const returnOfActions =
  Object.values(actions).map(getReturnOfExpression);
type AppAction = typeof returnOfActions[number];

// We might whant to chain it with third party action after.
export type RootAction =
  | AppAction;
