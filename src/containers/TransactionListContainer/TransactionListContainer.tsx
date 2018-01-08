import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { IState } from '../../utils/models/initialState';

import TransactionList from '../../components/TransactionList/TransactionList';
// import { updateExpense } from '../../actions/BudgetActions';
import { actions } from '../../actions/BudgetActions';

const mapStateToProps = (state: IState) => ({
  expense: state.budget.expense,
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  onUpdateExpense: (amount: number) => {
    dispatch(actions.updateExpense(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
