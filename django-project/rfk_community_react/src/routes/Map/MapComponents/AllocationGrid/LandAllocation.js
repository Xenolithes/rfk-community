import React from 'react';
import GridLayout from 'react-grid-layout';
import Styles from './LandAllocation.module.css';
import './styles.css';

const MyFirstGrid = props => {
  // layout is an array of objects, see the demo for more complete usage
  return (
    <div className={Styles.LandAllocationContainer}>
      <GridLayout
        className="layout"
        layout={props.layout}
        cols={12}
        rowHeight={30}
        width={1200}>
        <div className={Styles.divone} key="a">
          a
        </div>
        <div className={Styles.divone} key="b">
          b
        </div>
        <div className={Styles.divone} key="c">
          c
        </div>
      </GridLayout>
    </div>
  );
};

export default MyFirstGrid;
