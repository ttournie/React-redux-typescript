import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { IState } from '../../utils/models/initialState';
import TransactionList from '../../containers/TransactionListContainer/TransactionListContainer';

const styles = StyleSheet.create({
  wrapper: {
      marginTop: '50px'
  },
});

// Define Props type.
interface Props {
  originalBalance: number;
  currentBalance: number;
  onUpdateBalance: (balance: number) => void;
}

class BudjetForm extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.updateBalance = this.updateBalance.bind(this);
  }

  updateBalance(amount: string) {
    var amountNumber = parseInt(amount, 10);
    if (!isNaN(amountNumber)) {
      this.props.onUpdateBalance(amountNumber);
    }
  }

  render() {
    return (
      <div className={css(styles.wrapper)}>
        <h2 className="title"> Original Balance </h2>
        <input
          type="text"
          name="money"
          value={this.props.originalBalance}
          onChange={e => this.updateBalance(e.target.value)}
        />
        <h2 className="title"> Current Balance </h2>
        <input type="text" name="currentMoney" value={this.props.currentBalance} disabled={true}/>
        <TransactionList/>
      </div>
    );
  }
}

export default BudjetForm;