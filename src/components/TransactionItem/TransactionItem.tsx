import * as React from 'react';
// import { IState } from '../../utils/models/initialState';

// Define Props type.
interface Props {
  transaction: any;
  onUpdateTransaction: (id:number, description: string, amount: number) => void;
}

class TransactionItem extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.UpdateRow = this.UpdateRow.bind(this);
  }

  UpdateRow(id: number, description: string, amount: number) {
    this.props.onUpdateTransaction(id, description, amount);
  }

  UpdateDescriptionRow(description: string) {
    this.props.onUpdateTransaction(this.props.transaction.id, description, this.props.transaction.amount);
  }

  render () {
    return (
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={e => this.UpdateDescriptionRow(e.target.value)} value={this.props.transaction.description}/>
        <label htmlFor="title">Amount</label>
        <input type="text" name="amount"/>
      </div>
    );
  }
}

export default TransactionItem;