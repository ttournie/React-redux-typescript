import * as React from 'react';
import { Transaction, IState } from '../../utils/models/initialState';

// Define Props type.
interface Props {
  transaction: Transaction;
  onUpdateTransaction: (transaction: Transaction) => void;
}

class TransactionItem extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
  }

  UpdateAmountRow(amount: string) {
    var amountNumber = 0;
    if (amount) {
      amountNumber = parseInt(amount, 10);
    }
    this.props.transaction.amount = amountNumber;
    this.props.onUpdateTransaction(this.props.transaction);
  }

  UpdateDescriptionRow(description: string) {
    this.props.transaction.description = description;
    this.props.onUpdateTransaction(this.props.transaction);
  }

  render () {
    return (
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={e => this.UpdateDescriptionRow(e.target.value)}
          value={this.props.transaction.description}
        />
        <label htmlFor="title">Amount</label>
        <input
          type="text"
          name="amount"
          onChange={e => this.UpdateAmountRow(e.target.value)}
          value={this.props.transaction.amount}
        />
      </div>
    );
  }
}

export default TransactionItem;