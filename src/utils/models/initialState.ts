export type IState = {
  budget: {
    transactions: {id: number, description: string, amount: number }[],
    expense: number,
    money: number,
  },
};
