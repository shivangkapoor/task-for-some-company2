import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {updateData} from '../../actions';

const cleanseInput = (value, type) => {
  let newValue = value;
  if (type !== 'displayName') {
    newValue = parseInt(newValue, 10);
    if (isNaN(newValue)) {
      newValue = 0;
    }
  }
  return newValue;
}

const TableRowCell = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <td onClick={() => {
      if (isEditing === false) {
        setIsEditing(true);
      }
    }}>
      {!isEditing ? props.children : (
        <>
          <input size={props.type !== 'displayName' ? 3 : 16} value={value} onChange={(e) => {
            setValue(cleanseInput(e.target.value, props.type));
          }} />
          <button onClick={() => {
            props.updateData(value, props.type, props.id);
            setIsEditing(false);
          }}>
          ✔
          </button>
          <button onClick={() => {
            setIsEditing(false);
          }}>
          🗙
          </button>
        </>
      )}
    </td>
  );
}

export default connect((state, ownProps) => ({
  value: state.data[ownProps.id][ownProps.type],
}), {updateData})(TableRowCell);