/**
 * Created by n0240007 on 7/21/17.
 */
import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <div>
        <h1>My timeline</h1>
          <div className="eventDate">
            <p>October 24th, 2015</p>
          </div>
        <hr className="timeline"/>
        <div className="heartIcon"></div>
        <div className="event firstDate">
            <h3>Our first Date</h3>
            <h4>At the Bee's Knees in Allston</h4>
          </div>
      </div>
    );
  }
}

export default Timeline;
