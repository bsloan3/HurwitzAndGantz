import React, { Component } from 'react';
import Iframe from 'react-iframe'

export default class AboutComponent extends Component {

  render() {
    return (
        <div className="aboutpage">
          <h1 style={{color: 'white'}}>Location</h1>
          <h3>We welcome inquiries from potential clients and referring attorneys.  To schedule a consultation, please CONTACT us.</h3>
          <h3>We are conveniently located in metropolitan Detroit, and are headquartered in Dearborn Heights, Michigan.  We handle matters in Wayne, Oakland, Macomb and Washtenaw Counties.</h3>
          <Iframe url="https://www.google.com/maps/embed/v1/place?q=Attorneys%20and%20Counselors%208283%20N.%20Telegraph%20Dearborn%20Heights%2C%20MI%2048127&key=AIzaSyA7Hgdyox-atrqFESQ-ED9_LSFyYrKjQPE"
          position="relative"
          height="40VH"
          allowfullscreen></Iframe>
        </div>
    );
  }
}