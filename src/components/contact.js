import React, { Component } from 'react';

export default class ContactComponent extends Component {

  render() {
    return (
      <div>
        <div className="contacthead">
          <h1>Contact Hurwitz & Gantz, P.C.</h1>
          <h3>Please include:</h3>
          <ul>
            <li><h4>Your name</h4></li>
            <li><h4>Your email</h4></li>
            <li><h4>Your phone number</h4></li>
            <li><h4>The reason for contacting us</h4></li>
          </ul>
        </div>
        <div className="contactform">
          <form action="https://formspree.io/bradsloan16@gmail.com" method="POST">
            <input type="text" className="formemail" name="fullname" placeholder="Full name"></input>
            <input type="email" className="formemail" name="email" placeholder="Email"></input>
            <input type="text" className="formemail" name="phonenumber" placeholder="Phone number"></input>
            <textarea className="formmessage" name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
            <input type="hidden" name="_next" value="/" />
          </form>
        </div>
      </div>
    );
  }
}
