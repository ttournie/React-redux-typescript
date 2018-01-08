import * as React from 'react';

const TransactionItem = () => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" name="title"/>
      <label htmlFor="title">Amount</label>
      <input type="text" name="amount"/>
    </div>
  );
};

export default TransactionItem;