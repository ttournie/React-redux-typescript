import { getReturnOfExpression } from 'react-redux-typescript';
import { createAction } from 'typesafe-actions';

const BUDGET_EXPENSE_UPDATE = 'BUDGET_EXPENSE_UPDATE';
const BUDGET_ADD_TRANSACTION = 'BUDGET_ADD_TRANSACTION';

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
};

const returnOfActions =
  Object.values(actions).map(getReturnOfExpression);
type AppAction = typeof returnOfActions[number];

// We might whant to chain it with third party action after.
export type RootAction =
  | AppAction;
