import React from 'react';
import {connect} from 'react-redux';

import TableHeadCell from './TableHeadCell';
import {sortByNumbers, sortByString} from '../../actions';

const TableHead = (props) => (
  <thead>
    <tr>
      <TableHeadCell sortFn={props.sortByString} type="displayName">
        Country
      </TableHeadCell>
      <TableHeadCell sortFn={props.sortByNumbers} type="gold">
        Golds
      </TableHeadCell>
      <TableHeadCell sortFn={props.sortByNumbers} type="silver">
        Silvers
      </TableHeadCell>
      <TableHeadCell sortFn={props.sortByNumbers} type="bronze">
        Bronzes
      </TableHeadCell>
      <TableHeadCell sortFn={props.sortByNumbers} type="total">
        Total
      </TableHeadCell>
      <td width="2%" />
    </tr>
  </thead>
);

export default connect((state) => ({}), {sortByNumbers, sortByString})(TableHead);