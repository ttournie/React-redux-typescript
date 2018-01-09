import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { IState, Transaction } from '../../utils/models/initialState';

import TransactionItem from '../../components/TransactionItem/TransactionItem';
import { actions } from '../../actions/BudgetActions';

interface OwnProps {
  id: number;
}

const mapStateToProps = (state: IState, ownProps: OwnProps) => ({
  transaction: state.budget.transactions[ownProps.id],
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  onUpdateTransaction: (transaction: Transaction) => {
    dispatch(actions.updateTransaction(transaction));
    dispatch(actions.updateExpense());
  },
  removeRow: (id: number) => {
    dispatch(actions.removeTransaction(id));
    dispatch(actions.updateExpense());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionItem);
