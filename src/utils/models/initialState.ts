export type IState = {
  budget: {
    transactions: {description: string, amount: number }[],
    expense: number,
    money: number,
  },
};
