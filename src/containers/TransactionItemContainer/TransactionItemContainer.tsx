import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { IState } from '../../utils/models/initialState';

import TransactionItem from '../../components/TransactionItem/TransactionItem';
import { actions } from '../../actions/BudgetActions';

interface OwnProps {
  id: number;
}

const mapStateToProps = (state: IState, ownProps: OwnProps) => ({
  transaction: state.budget.transactions[ownProps.id],
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  onUpdateTransaction: (id: number, description: string, amount: number) => {
    dispatch(actions.updateTransaction(id, description, amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionItem);
