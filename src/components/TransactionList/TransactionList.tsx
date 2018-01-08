import * as React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import { IState } from '../../utils/models/initialState';

// Define Props type.
interface Props {
  expense: number;
  onUpdateExpense: (amount: number) => void;
}

class TransactionList extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.addToTotal = this.addToTotal.bind(this);
  }

  addToTotal() {
    this.props.onUpdateExpense(10);
  }

  render () {
    return (
      <div>
        <h2> Transactions List </h2>
        <TransactionItem/>
        <label htmlFor="expense">Total</label>
        <input type="text" name="expense" value={this.props.expense}/>
        <button type="button" onClick={this.addToTotal}>Click Me!</button>
      </div>
    );
  }
}

export default TransactionList;