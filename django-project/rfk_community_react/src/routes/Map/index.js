import React, { useState } from 'react';
import LandAllocationSelectionBar from './MapComponents/SelectionBar/LandAllocationSelectionBar';
import LandAllocation from './MapComponents/AllocationGrid/LandAllocation';
import StatsContainer from './MapComponents/Stats/StatsContainer';
import Styles from './index.module.css';

const MapComp = props => {
  const initialLayout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];
  //Use setLayout to change the blocks displayed within the grid
  const [layout, setLayout] = useState(initialLayout);

  return (
    <React.Fragment>
      <div className={Styles.MapCompContainer}>
        {/* Component where a user can select an option and drag it too the map*/}
        <LandAllocationSelectionBar />
        {/* Grid for land alloction */}
        <LandAllocation layout={layout} />
        {/* Stats Bar for individual land allocation stats and total allocation stats */}
      </div>
      <StatsContainer />
    </React.Fragment>
  );
};

export default MapComp;
