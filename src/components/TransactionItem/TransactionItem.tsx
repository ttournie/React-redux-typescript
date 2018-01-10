import * as React from 'react';
import Button from 'material-ui/Button';
import { StyleSheet, css } from 'aphrodite';
import { Transaction, IState } from '../../utils/models/initialState';

const styles = StyleSheet.create({
  wrapper: {
      borderBottom: '1px solid'
  },
});

// Define Props type.
interface Props {
  transaction: Transaction;
  onUpdateTransaction: (transaction: Transaction) => void;
  removeRow: (id: number) => void;
}

class TransactionItem extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.removeRow = this.removeRow.bind(this);
  }

  UpdateAmountRow(amount: string) {
    var amountNumber = parseInt(amount, 10);
    if (!isNaN(amountNumber)) {
      this.props.transaction.amount = amountNumber;
      this.props.onUpdateTransaction(this.props.transaction);
    }
  }

  UpdateDescriptionRow(description: string) {
    this.props.transaction.description = description;
    this.props.onUpdateTransaction(this.props.transaction);
  }

  removeRow(id: number) {
    this.props.removeRow(id);
  }

  render () {
    return (
      <div className={css(styles.wrapper)}>
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
        <Button type="button" onClick={() => this.removeRow(this.props.transaction.id)}>-</Button>
      </div>
    );
  }
}

export default TransactionItem;