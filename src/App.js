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
            <Tab>About</Tab>
            <Tab>Meet Our Team</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <div className="firmheader">
            Hurwitz & Gantz, P.C.
          </div>
          </nav>

          <div className="bodycontent">
            <TabPanel>
              < HomeComponent />
            </TabPanel>

            <TabPanel>
              < AboutComponent />
            </TabPanel>

            <TabPanel>
              <div style={{position: 'static', display: 'block'}}>
                <h1 style={{color: 'white', marginLeft:'3%'}}>The Team</h1>
                <h3 style={{color: 'white', marginLeft:'3%'}}>Click on any of our lawyers to find out more!</h3>
              </div>
              <div className="teampage">
                < TeamComponent />
              </div>
            </TabPanel>

            <TabPanel>
              < ContactComponent />
            </TabPanel>
          </div>
        </Tabs>
        <div style={{color: 'white', textAlign:'center', bottom:'0'}}>
          <p style={{margin: '0'}}>8283 N. Telegraph Road, Dearborn Heights, MI 48127</p>
          <p style={{margin: '0'}}>Call Now: (313) 278-7030</p>
        </div>
      </div>
    );
  }
}

export default App;
