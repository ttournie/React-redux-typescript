import { getReturnOfExpression } from 'react-redux-typescript';
import { createAction } from 'typesafe-actions';

const BUDGET_EXPENSE_UPDATE = 'BUDGET_EXPENSE_UPDATE';

export const actions = {
  updateExpense: createAction(BUDGET_EXPENSE_UPDATE, (expense: number) => ({
    type: BUDGET_EXPENSE_UPDATE,
    value: expense,
  })),
};

const returnOfActions =
  Object.values(actions).map(getReturnOfExpression);
type AppAction = typeof returnOfActions[number];

export type RootAction =
  | AppAction;
