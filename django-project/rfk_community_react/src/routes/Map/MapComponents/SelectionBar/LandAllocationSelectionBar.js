import React from 'react';
import Styles from './LandAllocationSelectionBar.module.css';

const LandAllocationSelectionBar = props => {
  return (
    <div className={Styles.SelectionBar}>
      <ul>
        <li>Housing</li>
        <li>Stadium</li>
      </ul>
    </div>
  );
};

export default LandAllocationSelectionBar;
