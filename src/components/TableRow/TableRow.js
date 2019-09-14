import React from 'react';
import {connect} from 'react-redux';

import TableRowCell from './TableRowCell';
import {removeCountry} from '../../actions';

const TableRow = (props) => (
  <tr>
    <TableRowCell
      type="displayName"
      id={props.id}
    >
      <img alt="countries flag" src={props.country.img} />
      {' '}
      {props.country.displayName}
    </TableRowCell>
    <TableRowCell 
      type="gold"
      id={props.id}
    >
      {props.country.gold}
    </TableRowCell>
    <TableRowCell
      type="silver"
      id={props.id}
      >
      {props.country.silver}
    </TableRowCell>
    <TableRowCell 
      type="bronze"
      id={props.id}
      >
      {props.country.bronze}
    </TableRowCell>
    <td>
      {props.country.total}
    </td>
    <td style={{color: 'red', cursor: 'pointer'}} onClick={() => props.removeCountry(props.country.countryName)}>
      ╳
    </td>
  </tr>
);

export default connect((state, ownProps) => ({
  country: state.data[ownProps.id],
}), {removeCountry})(TableRow);