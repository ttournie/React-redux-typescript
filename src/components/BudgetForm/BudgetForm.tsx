import * as React from 'react';

import TransactionList from '../../containers/TransactionListContainer/TransactionListContainer';

const BudjetForm = () => {
  return (
    <div>
      <input type="text" name="money"/>
      <TransactionList/>
    </div>
  );
};

export default BudjetForm;