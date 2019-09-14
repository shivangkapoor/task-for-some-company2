import React from 'react';

import css from './Table.module.css';

const Table = (props) => (
  <table className={css.container}>
    {props.children}
  </table>
);

export default Table;
