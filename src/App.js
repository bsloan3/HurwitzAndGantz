import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Nav, Navs, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AboutComponent from './components/about';
import HomeComponent from './components/home';
import ContactComponent from './components/contact';
import TeamComponent from './components/team';
import MilesComponent from './components/miles';
import VickiComponent from './components/vicki';
import MarkComponent from './components/mark';
import ThanksComponent from './components/thanks';

class App extends Component {

  // handleSelect(eventKey) {
    // event.preventDefault();
    // alert(`selected ${eventKey}`);
  // }

  render() {
    return (
      <div className="App">
        <Tabs>
          <nav>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Meet Our Team</Tab>
            <Tab>Location</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <div className="firmheader">
            Hurwitz & Gantz, P.C.
            <br/>
            <a href="tel:313-278-7030">313-278-7030</a>
          </div>
          </nav>

          <div className="bodycontent">
            <TabPanel>
              < HomeComponent />
            </TabPanel>

            <TabPanel>
              <div style={{position: 'static', display: 'block'}}>
                <h1 style={{color: 'white', marginLeft:'3%'}}>The Team</h1>
                <h3 className="teamheader" style={{color: 'white', marginLeft:'3%'}}>Click on any of our lawyers to find out more!</h3>
              </div>
              <div>
                < TeamComponent />
              </div>
                <div style={{position: 'static', display: 'block'}}>
                  <img style={{width: '30%'}} src="./images/DISTINGUISHED.png"></img>
                  <img style={{width: '30%'}} src="./images/peer.png"></img>
              </div>
            </TabPanel>

            <TabPanel>
              < AboutComponent />
            </TabPanel>

            <TabPanel>
              < ContactComponent />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
