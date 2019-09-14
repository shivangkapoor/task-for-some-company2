import React from 'react';
import {connect} from 'react-redux';

import css from './AddCountry.module.css';
import {addCountry} from '../../actions';

const AddCountry = (props) => (
  <section>
    <select onChange={
      (e) => {
        if (e.target.value != null) {
          props.addCountry(e.target.value)
        }
      }
    } 
    className={css.select}>
      <option value={null}>Add a country</option>
      {
        props.countriesToSelect.map((country) => (
          <option 
          key={country} 
          value={country}
          >
            {props.data[country].displayName}
          </option>
        ))
      }
    </select>
  </section>
);

export default connect((state) => ({
  countriesToSelect: state.countriesToSelect,
  data: state.data,
}), {addCountry})(AddCountry);