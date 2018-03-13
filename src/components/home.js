import React, { Component } from 'react';
import AboutCarousel from './AboutCarousel';
import { Jumbotron, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

export default class HomeComponent extends Component {

  render() {
    return (
      <div>
        <Jumbotron className="home">
          <h1>Hurwitz & Gantz, P.C.</h1>
          <h2>Call Now: <a href="tel:313-278-7030">313-278-7030</a></h2>
          <h4>A full service law firm rated "AV" by Martindale Hubbell Law Directory (Highest Rating in Legal Ability & Ethical Standards). We represent individuals and small business in a variety of legal matters, including</h4>
        </Jumbotron>
        <div className="mobilecarousel">
          <AboutCarousel />
        </div>
        <div className="mobilecarousel2">
          <ul>
            <li>Probate & Estate Planning</li>
            <li>Wills & Powers of Attorney</li>
            <li>Family Law</li>
            <li>Divorce & Prenuptial Agreements</li>
            <li>Personal Injury</li>
            <li>Wrongful Death</li>
            <li>Property Transfers & Ladybird Deeds</li>
            <li>Real Estate Purchases & Sales of Businesses</li>
            <li>Legal Malpractice</li>
            <li>Medical Malpractice</li>
            <li>Conservatorships</li>
            <li>Guardianships</li>
            <li>Limited Liability Companies</li>
            <li>Corporations</li>
            <li>Workers Compensation</li>
            <li>Social Security Disability</li>
          </ul>
        </div>

      </div>
    );
  }
}
