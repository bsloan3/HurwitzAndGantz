import React, { Component } from 'react';
import { Popover, ButtonToolbar, OverlayTrigger, Button } from 'react-bootstrap';
import MilesComponent from './miles';
import VickiComponent from './vicki';
import MarkComponent from './mark';
import MobileTeamComponent from './mobileteam.js';

export default class TeamComponent extends Component {
    constructor() {
        super();
        this.state = {
          staffinfoholderVisible: true,
          milesVisible: false,
          markVisible: false,
          vickiVisible: false
        }
      }

  render() {
    return (
    <div>
      <div className="mobileteam">
        <MobileTeamComponent/>
      </div>
      <div className="fullstaff">
        <div style={{width: '30%', display:'inline-block'}} onClick={() => this.milesOnClick()}>
            <div className="staffimg">
                <img src="./images/miles.jpg"></img>
                <div class="text">Miles Hurwitz</div>
            </div>
        </div>
        {
          this.state.milesVisible
            ? <MilesComponent />
            : null
        }
        {
          this.state.markVisible
            ? <MarkComponent />
            : null
        }
        {
          this.state.vickiVisible
            ? <VickiComponent />
            : null
        }
      </div>

      <div className="fullstaff">
        <div style={{width: '30%', display:'inline-block'}} onClick={() => this.markOnClick()}>
            <div className="staffimg">
                <img src="./images/mark.jpg"></img>
                <div class="text">Mark Gantz</div>
            </div>
        </div>
      </div>

      <div className="fullstaff">
        <div style={{width: '30%', display:'inline-block'}} onClick={() => this.vickiOnClick()}>
            <div className="staffimg">
                <img src="./images/vicki.jpg"></img>
                <div class="text">Victoria Sloan</div>
            </div>
        </div>
      </div>
    </div>
    );
  }

milesOnClick() {
    this.setState(prevState => ({
        milesVisible: !prevState.milesVisible,
        markVisible: false,
        vickiVisible: false
    }));
  }


markOnClick() {
    this.setState(prevState => ({
        milesVisible: false,
        markVisible: !prevState.markVisible,
        vickiVisible: false
    }));
  }


vickiOnClick() {
    this.setState(prevState => ({
        milesVisible: false,
        markVisible: false,
        vickiVisible: !prevState.vickiVisible
    }));
  }
}