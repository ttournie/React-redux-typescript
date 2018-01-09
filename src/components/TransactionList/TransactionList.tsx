import * as React from 'react';
import TransactionItem from '../../containers/TransactionItemContainer/TransactionItemContainer';
import { IState, Transaction } from '../../utils/models/initialState';

// Define Props type.
interface Props {
  expense: number;
  transactions: Transaction[];
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
          transactions.map((transaction, i) => (
            <div key={i}>
              <TransactionItem id={i}/>
            </div>
          ))
        }
        <label htmlFor="expense">Total</label>
        <input type="text" name="expense" value={expense}/>
        <button type="button" onClick={this.addToTotal}>Click Me!</button>
      </div>
    );
  }
}

export default TransactionList;