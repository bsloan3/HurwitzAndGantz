import React, { Component } from 'react';
import MilesComponent from './miles';
import VickiComponent from './vicki';
import MarkComponent from './mark';

export default class MobileTeamComponent extends Component {
  render() {
    return (
    <div>
      <div className="fullstaff2">
        <div style={{display:'block'}}>
            <img src="./images/miles.jpg"></img>
        </div>
        <MilesComponent />
      </div>

      <div className="fullstaff2">
        <div style={{display:'block'}}>
            <img src="./images/mark.jpg"></img>
        </div>
        <MarkComponent />
      </div>

      <div className="fullstaff2">
        <div style={{display:'block'}}>
            <img src="./images/vicki.jpg"></img>
        </div>
        <VickiComponent />
      </div>
    </div>
    );
  }
}