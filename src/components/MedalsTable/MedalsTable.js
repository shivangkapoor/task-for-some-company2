import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Table, TableHead, TableBody, TableRow} from '../';
import {hydrateData} from '../../actions';

const MedalsTable = (props) => {
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((res) => {
        props.hydrateData(res);
      })
  // eslint-disable-next-line
  }, []);
  return (
    <section>
      
      <Table>
        <TableHead />
        <TableBody >
          {
            props.countriesView.map((countryId) => (
              <TableRow key={countryId} id={countryId} />
            ))
          }
        </TableBody>
      </Table>
    </section>
  );
}

export default connect((state) => ({
  countriesView: state.countriesView,
}), {hydrateData})(MedalsTable);