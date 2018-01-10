export type Transaction = {
  id: number,
  description: string,
  amount: number
}

export type IState = {
  budget: {
    transactions: Transaction[],
    expense: number,
    balance: number,
  },
};
