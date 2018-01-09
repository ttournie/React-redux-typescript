import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { IState } from '../../utils/models/initialState';

import TransactionList from '../../components/TransactionList/TransactionList';
import { actions } from '../../actions/BudgetActions';

const mapStateToProps = (state: IState) => ({
  expense: state.budget.expense,
  transactions: state.budget.transactions,
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  addRow: () => {
    dispatch(actions.addTransaction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
