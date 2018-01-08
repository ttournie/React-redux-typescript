import * as React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import { IState } from '../../utils/models/initialState';

// Define Props type.
interface Props {
  expense: number;
  transactions: {description: string, amount: number }[];
  onUpdateExpense: (amount: number) => void;
  addRow: () => void;
}

class TransactionList extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.addToTotal = this.addToTotal.bind(this);
    this.addRow = this.addRow.bind(this);
  }

  addRow() {
    this.props.addRow();
  }

  addToTotal() {
    this.props.onUpdateExpense(10);
  }

  render () {
    var {transactions, expense} = this.props;
    return (
      <div>
        <h2> Transactions List </h2>
        <button type="button" onClick={this.addRow}>Add Row</button>
        {
          transactions.map((transaction, i) => 
            <TransactionItem key={i} />
          )
        }
        <label htmlFor="expense">Total</label>
        <input type="text" name="expense" value={expense}/>
        <button type="button" onClick={this.addToTotal}>Click Me!</button>
      </div>
    );
  }
}

export default TransactionList;