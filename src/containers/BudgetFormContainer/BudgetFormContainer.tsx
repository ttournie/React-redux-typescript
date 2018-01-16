import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../utils/models/initialState';
import BudgetForm from '../../components/BudgetForm/BudgetForm';
import { actions } from '../../actions/BudgetActions';

const mapStateToProps = (state: IState) => ({
  originalBalance: state.budget.originalBalance,
  currentBalance: state.budget.currentBalance,
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  onUpdateBalance: (balance: number) => {
    dispatch(actions.updateBalance(balance));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetForm);
