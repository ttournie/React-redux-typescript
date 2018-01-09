import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { IState } from '../../utils/models/initialState';

import TransactionItem from '../../components/TransactionItem/TransactionItem';
import { actions } from '../../actions/BudgetActions';

const mapStateToProps = (state: IState, ownProps: any) => ({
  transaction: state.budget.transactions[ownProps.id],
});

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  onUpdateTransaction: (id:number, description: string, amount: number) => {
    dispatch(actions.updateTransaction(id, description, amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionItem);