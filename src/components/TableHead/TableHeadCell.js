import React, {useState} from 'react';
import {connect} from 'react-redux';

const getDir = (dir) => {
  if (dir === 'desc') {
    return 'asc';
  }
  return 'desc';
}

const TableHeadCell = (props) => {
  const [dir, setDir] = useState('desc')
  return (
    <th 
      width={props.type === 'displayName' ? '50%' : ''} 
      onClick={() => {
        setDir(getDir(dir));
        props.sortFn(props.type, dir);
      }}
      style={{
        cursor: props.type !== 'total' ? 'pointer' : '',
      }}
    >
      {props.children}
      {props.type === props.sortByType ? 
        props.sortByDir === 'desc' ? ' ↑' : ' ↓' : ''}
    </th>
  );
}

export default connect((state) => ({
  sortByType: state.sortByType,
  sortByDir: state.sortByDir,
}))(TableHeadCell);