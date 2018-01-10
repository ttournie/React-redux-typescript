import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import TransactionList from '../../containers/TransactionListContainer/TransactionListContainer';

const styles = StyleSheet.create({
  wrapper: {
      marginTop: '50px'
  },
});

const BudjetForm = () => {
  return (
    <div className={css(styles.wrapper)}>
      <h2 className="title"> Balance </h2>
      <input type="text" name="money"/>
      <TransactionList/>
    </div>
  );
};

export default BudjetForm;