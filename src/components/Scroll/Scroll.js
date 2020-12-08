import React from 'react';
import './Scroll.scss';
import { Waypoint } from 'react-waypoint';

const Scroll = (props) => {

  if (props.profile) {
    return (
      <div className="scroll" style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
    )

  }

  
  const waypointHandler = () => {
    props.waypointTrigger();
  }

  return (
    <div className="scroll" style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
      <Waypoint onEnter={waypointHandler} />
    </div>
  );
};

export default Scroll;