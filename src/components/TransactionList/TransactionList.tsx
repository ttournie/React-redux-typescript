import * as React from 'react';
import Button from 'material-ui/Button';
import TransactionItem from '../../containers/TransactionItemContainer/TransactionItemContainer';
import { IState, Transaction } from '../../utils/models/initialState';

// Define Props type.
interface Props {
  expense: number;
  transactions: Transaction[];
  addRow: () => void;
}

class TransactionList extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.addRow = this.addRow.bind(this);
  }

  addRow() {
    this.props.addRow();
  }

  render () {
    var {transactions, expense} = this.props;
    return (
      <div>
        <h2 className="title"> Transactions List </h2>
        {
          transactions.map((transaction, i) => (
            <div key={i}>
              <TransactionItem id={i}/>
            </div>
          ))
        }
        <Button fab={true} mini={true} color="accent" type="button" aria-label="add" onClick={this.addRow}>+</Button>
        <div>
          <label htmlFor="expense">Total</label>
          <input type="text" name="expense" value={expense} disabled={true}/>
        </div>
      </div>
    );
  }
}

export default TransactionList;